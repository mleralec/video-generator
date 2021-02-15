import config from './config'
import app from './app'

const { port, name } = config

app.listen(port, () => console.log(`${name} started on port ${port}`))
