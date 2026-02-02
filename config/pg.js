import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "neondb_owner",
  database: "neondb",
  password: "npg_3RDxrGkq0YVj",
  port: 5432,
});

export default pool;
