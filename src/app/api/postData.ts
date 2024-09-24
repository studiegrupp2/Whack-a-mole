import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default async function PostData(
  userName: string,
  currentPoints: number
) {
  
  try {
    // Insert the new score
    await sql`INSERT INTO HighScore (name, score) VALUES (${userName}, ${currentPoints})`;
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
