const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const statusCodes = require('../constants/statusCodes');

const mysql = require('mysql');

const userdb = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'userdb',
});

userdb.connect((err)=>{
    if(err){
        return console.log('connection' + err);
    }
    console.log('userdb connected...');
});

function signUp(req, res) {
    try {
        const { username, password } = req.body;
        let sql = `INSERT INTO users (username, password) VALUES (${JSON.stringify(username)}, ${JSON.stringify(password)})`;
        userdb.query(sql, (err, results)=>{
            if(err) console.log('query' + err);
            else {
                if(results.affectedRows > 0) res.json({"message" : "Registration done successfully"});
                else res.json({"message":"Failed to register"});
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
}

function signIn(req, res) {
    const {username ,password} = req.body;
    try {
        let sql = `SELECT * FROM users WHERE username = ${JSON.stringify(username)} AND password = ${JSON.stringify(password)}`;
        userdb.query(sql, (err, results)=>{
            if(err) return console.log('query' + err);
            if(results.length > 0) {
                jwt.sign({username, password}, keys.jwt.secretKey, {expiresIn: "1h"}, (err, token) =>{
                    if(!err) {
                        res.status(200).send({token});
                    } else {
                        res.status(401).send({status: statusCodes.TOKEN_EXPIRED});
                    }
                });
            } else {
                res.status(401).json({'message': 'Invalid credentials'});
            }
        }); 
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {signIn, signUp};