const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pabba",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});