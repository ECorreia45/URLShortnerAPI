//load alphanumeric module that generates random alphanumeric id of length 5
var randomId = require("./alphanumeric");

var generateUrl = function(url){

    //grab the first 3 char of the link and include the basic path
    var newUrl = "/go/" + url.substr(0,3);

    //generate a random alphanumeric length of 5 and add it to the new url
    newUrl += randomId();

    console.log("a random url was created | line 10 at " + __filename);
    return newUrl;
};

//export this module
module.exports = generateUrl;