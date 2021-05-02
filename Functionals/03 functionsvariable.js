//this method is unique in javascript to define function using variable.
var getUserRole=function(name,role){
//function getUserRole(name,role){
    switch (role) {
        case "admin":
            //return name+" is admin with all access";
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is subadmin to delete/access course`;
            break;
        case "testprep":
            return `${name} is testprep to delete/access tests`;
            break;
        case "user":
            return `${name} is user to consume content`;
            break;
        default:
            return `${name} is trail user`;
            break;
    }
    
}
console.log(getUserRole("Angeshwari","admin"));
var getRole=getUserRole("sai","testprep");
console.log(getRole);