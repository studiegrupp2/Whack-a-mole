import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default async function PostData(
  userName: string,
  currentPoints: number,
  reactionTime: number
) {
  
  try {
    // Insert the new score
    await sql`INSERT INTO HighScore (name, score) VALUES (${userName}, ${currentPoints})`;
    console.log("Data inserted successfully");

    await sql`INSERT INTO ReactionTime (name, reactionTime) VALUES (${userName}, ${reactionTime})`;
    console.log(`ReactionTime inserted succesfully ${reactionTime}`);
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}

