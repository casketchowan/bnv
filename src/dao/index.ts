import { Pool } from 'pg';

// this is the pool object that is used to connnect to the DB
// it is located outside the particular repository files because it should be
// used by more than just the PaperRepository (if we had other resources, they would have
// corresponding repositories that would use this same pool)
export const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "bookapi",
    user: "admin",
    password: "password",
    // max:1
})
