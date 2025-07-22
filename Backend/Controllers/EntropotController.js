import { pool } from "../config/dbconfig.js";
// get All entropot
const getEntropot = async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM llx_entrepot");
    return res.json(results);
  } catch (error) {
    console.error("Error fetching entropot data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
// get One entropot
const getOneEntropot = async (req, res) => {
  try {
    const { id: rowid } = req.params;
    const [results] = await pool.query(
      "SELECT * FROM llx_entrepot WHERE rowid = ?",
      [rowid]
    );
    return res.json(results);
  } catch (error) {
    console.error("Error fetching entropot data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
// 

export { getEntropot, getOneEntropot };
