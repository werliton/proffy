import { Request, Response } from 'express'
import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem{
    week_day: number
    from: string
    to: string
}

export default class ClassesControler{

    async index(request:Request, response: Response){
        const filter = request.query
        console.log('Listando aulas');
        
        const subject = filter.subject as string
        const week_day = filter.week_day as string
        const time = filter.time as string

        if (!filter.subject || !filter.week_day || !filter.time) {
            return response.status(400).json({
                error: 'Missing filters to seach classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('class_schedule.class_id = classes.id')
                .whereRaw('class_schedule.week_day = ??', [Number(week_day)])
                .whereRaw('class_schedule.from <= ?? ', timeInMinutes)
                .whereRaw('class_schedule.to > ?? ', timeInMinutes)
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'] )

        return response.json(classes)
    }
    async create(request:Request, response: Response){

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body
   
        const trx = await db.transaction()
   
        try {
           const insertedUsersIds = await trx('users').insert({
               name,
               avatar, 
               whatsapp,
               bio
           }).returning('id')
      
           const user_id = insertedUsersIds[0]
      
           const insertedClassesIds = await trx('classes').insert({
               subject,
               cost,
               user_id
           }).returning('id')
      
           const class_id = insertedClassesIds[0]
      
           const classSchedule = await schedule.map((item: ScheduleItem) => ({
              week_day: item.week_day,
              from: convertHourToMinutes(item.from),
              to: convertHourToMinutes(item.to),
              class_id
           }))
      
           await trx('class_schedule').insert(classSchedule)
      
           trx.commit()
      
           console.log('Usuário inserido com sucesso.');
      
           return response.status(201).send()
        } catch (error) {
            console.log('Error', error);
            
           await trx.rollback()
   
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
   }
}