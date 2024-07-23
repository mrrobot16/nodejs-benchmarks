import express from 'express'
import morgan from 'morgan'
import { MongoClient } from 'mongodb'

import { CORS } from '@/middlewares'


const url = "mongodb+srv://dylan:43VFMVJVJUFAII9g@cluster0.8phbhhb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url)
export const app = express()

app.use(CORS);

// Middleware to log requests
app.use(morgan('combined'))

// Middleware to parse JSON bodies
app.use(express.json())

app.get('/', async (req, res) => {
    try {
		await client.connect();
		const db = client.db('weave-dev-db');
		const workflows = await db.collection('workflows').find({ user_id: 'hmgaar@gmail.com' }).toArray();
		const data = {
			workflows
		};

		res.send({
			status: 200,
			data
		  })
	  } catch (error) {
		console.error('GET_WORKFLOW_ERROR_MESSAGE', error);
	  } finally {
		await client.close();
	  }

})
