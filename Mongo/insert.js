var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"

var myDoc = {firstName :   process.argv[2] , lastName: process.argv[3] }

//console.log(JSON.stringify(myDoc))

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('docs').insert(myDoc, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(myDoc))
        db.close()
    })
})