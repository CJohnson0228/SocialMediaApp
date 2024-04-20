import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { connectDB } from './database/database'

dotenv.config()

// === Server Setup
const app: Express = express()

// === Middleware
app.use(express.json())

app.use((req: Request, res: Response, next) => {
  console.log(req.path, req.method)
  next()
})

// === Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Social Media App Server')
})

// === Mongo Database
connectDB()
  .then(() => {
    // === listen for requests
    const port = process.env.PORT || 8082
    try {
      app.listen(port, (): void => console.log(`Server running at http://localhost: ${port}`))
    } catch (error: any) {
      console.error(`Error occurs: ${error.message}`)
    }
  })
  .catch((error) => {
    console.log(error)
  })
