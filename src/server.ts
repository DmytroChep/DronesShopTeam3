import express from 'express'
import { productRouter } from './Product/Product.router'
import { userRouter } from './User/User.router'


const PORT = 8000
const HOST = "127.0.0.1"
const app = express()


app.use(express.json())
app.use(productRouter)
app.use(userRouter)

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})