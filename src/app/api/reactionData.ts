import { sql } from "@vercel/postgres";

interface ReactionProp {
  name: string;
  reactionTime: number;
}

export default async function ReactionFetch(): Promise<ReactionProp[]> {
  try {
    // Fetch all scores
    const result =
      await sql`SELECT * FROM ReactionTime ORDER BY reactiontime DESC`;
    console.log("All ReactionTime:", result.rows);
    console.log(result);

    const reactionResult: ReactionProp[] = result.rows.map((row) => ({
      name: row.name,
      reactionTime: Number(row.reactiontime),
    }));

    return reactionResult || [];
  } catch (error) {
    console.error("Something went wrong");
    return [];
  }
}
