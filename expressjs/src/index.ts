import { config } from 'dotenv'
import 'tsconfig-paths/register'

if (process.env.NODE_ENV !== 'production') {
  config()
}

// Use the correct absolute path import based on tsconfig.json
import { app } from '@/app'

const port = process.env.PORT || 3000

app.listen(port, () => {
  	console.log(`API available on http://localhost:${port}`)
})
