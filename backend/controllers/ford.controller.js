const connection = require('../config/db');

const Ford = {
    // Hogy hívják az egyes pizzafutárokat?  
    getCars(req,res){
        let sql= 'SELECT * FROM cars';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getModels(req,res){
        let sql= 'SELECT * FROM models';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },

}

module.exports = Ford;