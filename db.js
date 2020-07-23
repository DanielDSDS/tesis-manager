const Pool = require('pg').Pool

const pool = new Pool({
    user:"rxwkswukssaxxq",
    password:"d3ff92457105b703b154214a35c08c40dd6c529f923b0d72a94f591853ff4018",
    host:"ec2-54-175-117-212.compute-1.amazonaws.com",
    port: 5432,
    database:"ddjkns58aueig2",
    ssl:true
})

module.exports = pool;