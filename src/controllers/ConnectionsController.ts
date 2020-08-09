import { Response, Request } from "express";
import db from "../database/connection";

export default class ConnectionsController{
    async index(request: Request, response: Response){
        // const 
     }
    async create(request: Request, response: Response){
       const { user_id } = request.body

       await db('connections').insert({
           user_id
       })

       console.log('Conexao criada com sucesso');
       
       return response.status(201).send()
    }
}