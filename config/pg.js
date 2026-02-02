import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "neondb_owner",
  host: "ep-solitary-wildflower-a1n6nqdw-pooler.ap-southeast-1.aws.neon.tech",
  database: "neondb",
  password: "npg_3RDxrGkq0YVj",
  port: 5432,
});

export default pool;
