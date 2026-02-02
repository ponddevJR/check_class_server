import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_3RDxrGkq0YVj@ep-solitary-wildflower-a1n6nqdw-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  // ssl: { rejectUnauthorized: false },
});

export default pool;
