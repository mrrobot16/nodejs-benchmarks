const Koa = require('koa');
const app = new Koa();
const MongoClient = require('mongodb').MongoClient

const url = "mongodb+srv://dylan:43VFMVJVJUFAII9g@cluster0.8phbhhb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url)


// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

const testMongo = async ctx => {
	try {
		await client.connect()
		const db = client.db('weave-dev-db')
		const workflows = await db.collection('workflows').find({ user_id: 'hmgaar@gmail.com' }).toArray()
		const data = {
		  workflows
		}     
		ctx.body = {
			status: 200,
			data 
		  }
	} catch (error) {
	  console.error('GET_WORKFLOW_ERROR_MESSAGE', error)
	} finally {
	  await client.close()
	}
}

app.use(testMongo);

app.listen(3005);