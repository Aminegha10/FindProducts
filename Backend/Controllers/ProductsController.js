import { pool } from "../config/dbconfig.js";
// get All products
const getProducts = async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM llx_product LIMIT 1");
    return res.json(results);
  } catch (error) {
    console.error("Error fetching product data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Export the getProducts function
const getOneProduct = async (req, res) => {
  const { ref } = req.params;

  try {
    const [results] = await pool.query(
      "SELECT * FROM llx_product WHERE ref = ?",
      [ref]
    );
    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.json(results);
  } catch (error) {
    console.error("Error fetching product data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// product by entropot
const getProductsEntropot = async (req, res) => {
  const { id } = req.params;
  const { startIndex, limit } = req.query;
  try {
    const [results] = await pool.query(
      `SELECT
        p.rowid AS ProductId,
        p.ref AS ProductRef,
        p.label AS ProductLabel,
        GROUP_CONCAT(DISTINCT CONCAT(e.ref, ':', ps.reel)) AS StockPlaces,
        GROUP_CONCAT(DISTINCT f.filename) AS ImageFilenames,
        GROUP_CONCAT(DISTINCT l.url) AS VideoUrls
        FROM llx_product p
        LEFT JOIN llx_product_stock ps ON p.rowid = ps.fk_product
        LEFT JOIN llx_entrepot e ON e.rowid = ps.fk_entrepot
        LEFT JOIN llx_ecm_files f ON f.src_object_type = 'product' AND f.src_object_id = p.rowid
        LEFT JOIN llx_links l ON l.objecttype = 'product' AND l.objectid = p.rowid
        WHERE p.fk_product_type = 0 AND (p.label LIKE ? OR p.ref LIKE ?)
        GROUP BY p.rowid
        ORDER BY p.ref ${
          startIndex !== undefined && limit !== undefined
            ? `LIMIT  ${startIndex}, ${limit}`
            : ""
        }`,
      [`%${id}%`, `%${id}%`]
    );
    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.json(results[0]);
  } catch (error) {
    console.error("Error fetching product data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { getProducts, getOneProduct };
