import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)


console.log('Servidor rodando na porta 3333');

app.listen(3333)

