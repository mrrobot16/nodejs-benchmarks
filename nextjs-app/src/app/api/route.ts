import { NextResponse } from 'next/server'

import { MongoClient } from 'mongodb'

const url = "mongodb+srv://dylan:43VFMVJVJUFAII9g@cluster0.8phbhhb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url)

const handler = async () => {

    try {
		await client.connect();
		const db = client.db('weave-dev-db');
		const workflows = await db.collection('workflows').find({ user_id: 'hmgaar@gmail.com' }).toArray();
		const data = {
			workflows
		};
		return NextResponse.json({ status: 200, data })
	  } catch (error) {
		console.error('GET_WORKFLOW_ERROR_MESSAGE', error);
	  } finally {
		await client.close();
	  }

}

export { handler as GET }

export const POST = () => {
    return NextResponse.json({ status: 200, message: 'POST request received'})
}

export const PUT = () => {
    return NextResponse.json({ status: 200, message: 'PUT request received'})
}

export const DELETE = () => {
    return NextResponse.json({ status: 200, message: 'DELETE request received'})
}

export const PATCH = () => {
    return NextResponse.json({ status: 200, message: 'PATCH request received'})
}

export const OPTIONS = () => {
    return NextResponse.json({ status: 200, message: 'OPTIONS request received'})
}

export const HEAD = () => {
    return NextResponse.json({ status: 200, message: 'HEAD request received'})
}
