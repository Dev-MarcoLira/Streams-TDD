import { config } from 'dotenv'
config()

export const integration = {
    PORT: process.env.PORT_TEST,
    BASE_URL: `http://localhost:${process.env.PORT_TEST}`
}

export const unit = {
    PORT: process.env.PORT,
    BASE_URL: `http://localhost:${process.env.PORT}`
}