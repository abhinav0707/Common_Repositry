const mongoose = require('mongodb');

mongoose.connect('mongodb://localhost:27017/CrudDB',{ useNewUrlParser: true },function(err){
    if (!err)
        console.log('mongodb connection successfull...');
        else
            console.log('Error in DB Connection:',+ JSON.stringify(err,undefined, 2));
});

module.exports = mongoose;