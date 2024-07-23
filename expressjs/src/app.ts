import express from 'express'
import morgan from 'morgan'

import { CORS } from '@/middlewares'

export const app = express()

app.use(CORS);

// Middleware to log requests
app.use(morgan('combined'))

// Middleware to parse JSON bodies
app.use(express.json())

app.get('/', (req, res) => {
  res.send({
	status: 200
  })
})
