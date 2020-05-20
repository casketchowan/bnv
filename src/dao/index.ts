import { Pool } from 'pg';

// this is the pool object that is used to connnect to the DB

export const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "bookapi",
    user: "admin",
    password: "password",
    
})

export const pool2 = new Pool({
    host: "localhost",
    port: 5432,
    database: "bookapi2",
    user: "acct1",
    password: "password",
    
})