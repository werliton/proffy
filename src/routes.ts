import express from 'express'

const routes = express.Router()


routes.get('/users', (resquest, response) => {
    return response.json({
        nome:'letox',
        age:20
    })
})

export default routes