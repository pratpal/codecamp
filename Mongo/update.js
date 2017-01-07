var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/" + process.argv[2] 

var nameFilter = {name :   "Tina" }
var updateProperties = {age:40}

//console.log(JSON.stringify(myDoc))

mongo.connect(url, function(err, db) {
    if (err) throw err
    db.collection('users').update(nameFilter, {$set : updateProperties} , function(err, data) {
        if (err) throw err
        //console.log(JSON.stringify(myDoc))
        db.close()
    })
})