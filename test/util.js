import { config } from 'dotenv'
config()

export const PORT = process.env.PORT_TEST
export const BASE_URL = `http://localhost:${PORT}`