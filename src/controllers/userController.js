const { pool } = require("../connection/postgresql");

const alluser = (req, res) => {
    let query = `SELECT * FROM users`;
    console.log(query);
    pool.query(query, (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows);
    })
}


module.exports = { alluser };