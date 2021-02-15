import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT,
  name: process.env.NAME,
}
