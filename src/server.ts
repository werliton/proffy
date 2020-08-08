import express from 'express'

const app = express()

app.use(express.json())

app.get('/users', (resquest, response) => {
    return response.json({
        nome:'letox',
        age:20
    })
})



app.listen(3333)

