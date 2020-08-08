import express, { request } from 'express'
import db from './database/connection'
import convertHourToMinutes from './utils/convertHourToMinutes'

const routes = express.Router()

interface ScheduleItem{
    week_day: number
    from: string
    to: string
}

routes.post('/classes', async (request, response) => {

    
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
        })
   
        const user_id = insertedUsersIds[0]
   
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id
        })
   
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

        await trx.rollback()

         return response.status(400).json({
             error: 'Unexpected error while creating new class'
         })
     }
})



export default routes