import express, { request } from 'express'
import ClassesControler from './controllers/ClassesController'

const routes = express.Router()

const classesController = new ClassesControler()

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)



export default routes