'use strict'

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://dylan:43VFMVJVJUFAII9g@cluster0.8phbhhb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    try {
		await client.connect();
		const db = client.db('weave-dev-db');
		const workflows = await db.collection('workflows').find({ user_id: 'hmgaar@gmail.com' }).toArray();
		const data = {
			workflows
		};

		return {
			status: 200,
			data
		  }
	  } catch (error) {
		console.error('GET_WORKFLOW_ERROR_MESSAGE', error);
	  } finally {
		await client.close();
	  }
  })
}
