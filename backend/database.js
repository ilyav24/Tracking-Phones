/* const { createPool } = require('mysql2');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "locationdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

pool.getConnection(function (err, conn) {
    if (err) throw err;
    console.log("Connected!");
});
async function createTable() {
    try {
        return (
            await pool.query(`CREATE TABLE IF NOT EXISTS locations 
            (ip VARCHAR(255), 
            city VARCHAR(255), 
            country VARCHAR(255), 
            latitude VARCHAR(255), 
            longtitude VARCHAR(255))`)
        ).rows
    } catch (err) {
        throw err;
    }
}

async function insert(ip, city, country, lat, long) {
    try {
        return (
            await pool.query(`INSERT INTO locations (? , ? , ? , ?, ?)`
                , [ip, city, country, lat, long])
        ).rows
    } catch (err) {
        throw err;
    }
}

async function returnAll() {
    try {
        return (
            await pool.query(`select * from locations`)
        ).rows
    } catch (err) {
        throw err;
    }
}

module.exports = pool; */