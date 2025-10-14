import sql from "../configs/db.js";

// export async function createUsersTable() {
//   try {
//     await sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         full_name VARCHAR(100) NOT NULL,
//         email VARCHAR(150) UNIQUE NOT NULL,
//         password TEXT,
//         google_id TEXT,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       );
//     `;
//     console.log("Users table exists or was created successfully");
//   } catch (err) {
//     console.error("Error creating users table:", err);
//     throw err;
//   }
// }

export async function insertUser({ full_name, email, password, google_id }) {
  const response = await sql`
    INSERT INTO users (full_name, email, password, google_id)
    VALUES (${full_name}, ${email}, ${password}, ${google_id})
    RETURNING id, full_name, email, google_id;
  `;
  return response[0];
}

export async function findUserByEmail(email) {
  const response = await sql`SELECT * FROM users WHERE email = ${email}`;
  return response[0];
}

export async function findUserByGoogleId(google_id) {
  const response = await sql`SELECT * FROM users WHERE google_id = ${google_id}`;
  return response[0];
}
