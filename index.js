const userInformation = require("./information");
const  cowsay  =  require ( "cowsay" ) ;
const stringcow = ` mon nom est ${userInformation.userName}`;


console.log( cowsay . say ( { 
    text : `${stringcow}` , 
    e : "OO" , 
    T : "U " 
} ) ) ;