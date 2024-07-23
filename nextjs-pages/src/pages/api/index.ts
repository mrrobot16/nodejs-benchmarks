import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';


const url = "mongodb+srv://dylan:43VFMVJVJUFAII9g@cluster0.8phbhhb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url)

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    await NextCors(req, res, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    try {
		await client.connect();
		const db = client.db('weave-dev-db');
		const workflows = await db.collection('workflows').find({ user_id: 'hmgaar@gmail.com' }).toArray();
		const data = {
			workflows
		};
		res.status(200).json({ status: 200, data });
	  } catch (error) {
		console.error('GET_WORKFLOW_ERROR_MESSAGE', error);
	  } finally {
		await client.close();
	  }
    
};
