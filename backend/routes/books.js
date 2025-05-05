const express = require('express');
const router = express.Router();
const pool = require('../db');

const buildFilterQuery = (req, res, next) => {
  const { author } = req.query;

  req.filterQuery = {
    sql: 'SELECT * FROM books WHERE 1=1',
    params: []
  };

  if (author) {
    req.filterQuery.sql += ' AND author LIKE ?';
    req.filterQuery.params.push(`%${author}%`);
  }

  next();
};

router.get('/', buildFilterQuery, async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(req.filterQuery.sql, req.filterQuery.params);
    res.json(rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database operation failed' });
  } finally {
    if (conn) conn.end();
  }
});

module.exports = router;
