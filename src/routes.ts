import express, { request } from 'express'
import ClassesControler from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()

const classesController = new ClassesControler()
const connectionsController = new ConnectionsController()

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)



export default routes