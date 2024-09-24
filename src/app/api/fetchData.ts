import { sql } from "@vercel/postgres";

interface HighScore {
  name: string;
  score: number;
}

export default async function FetchData(): Promise<HighScore[]> {
  try {
    // Fetch all scores
    const result = await sql`SELECT * FROM HighScore ORDER BY score DESC`;
    console.log("All scores:", result.rows);

    const highScores: HighScore[] = result.rows.map((row) => ({
      name: row.name,
      score: Number(row.score),
    }));

    return highScores || [];
  } catch (error) {
    console.error("Something went wrong");
    return [];
  }
}
