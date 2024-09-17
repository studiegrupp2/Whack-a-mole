import { sql } from "@vercel/postgres";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default async function PostData(userName: string, currentPoints: number) {
  console.log("All environment variables:", process.env);
  console.log("POSTGRES_URL:", process.env.POSTGRES_URL);

  try {
    // Insert the new score
    await sql`INSERT INTO HighScore (name, score) VALUES (${userName}, ${currentPoints})`;
    console.log("Data inserted successfully");

    // Fetch all scores
    const result = await sql`SELECT * FROM HighScore ORDER BY score DESC`;
    console.log("All scores:", result.rows);

    return result.rows;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}