import dotenv from 'dotenv';
dotenv.config()

const HOST = process.env.HOST


// auth route 
const AUTH_ROUTE = `http://localhost:3201/api/v1/auth`
// const AUTH_ROUTE = `${HOST}/api/v1/auth`
export const CHECK_USER = `${AUTH_ROUTE}/check-user`
export const REGISTER_USER = `${AUTH_ROUTE}/register-user`