import pool from "../config/db.js";

export const createUserTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
     );
    `;

  try {
    await pool.query(createTableQuery);
    console.log("User table created successfully or already exists.");
  } catch (error) {
    console.error("Error creating user table:", error);
  }
};
