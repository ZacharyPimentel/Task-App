import dotenv from 'dotenv';

dotenv.config()

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const DB_NAME = process.env.DB_NAME;

export const SERVER = {
    DB_CONNECTION_STRING,
    DB_NAME
}