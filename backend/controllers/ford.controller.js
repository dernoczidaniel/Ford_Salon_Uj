const connection = require('../config/db');

const Ford = {
    // Hogy hívják az egyes pizzafutárokat?  
    getDeliveryNames(req,res){
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
    getInteriorColor(req,res){
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

}

module.exports = Ford;