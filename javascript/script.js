//var name = "jack";
//var age = "23";

//var message = "Hi, my name is " + name + " and I am" + age + " years old!";

//console.log(message);


 
var firsName = " john ";
var lastName = " whateveritis ";
var dateOfBirth = " 10-11-1982";
var age = " 23 ";
var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

var loginWelcomeMessage = "welcome " + firsName +".happy " + age+"rd birthday!" ;

console.log(loginWelcomeMessage);


var sum = 10 + 15;
var sub = 15 - 10;
var mul = 3 * 15;
var div = 9/3;
var div = 10/3;
var mod = 10%3;
var msg = "10/3 = 3 with a remainder of " +mod;
var result =  10 * ((5+3)-4)
console.log(sum,sub,mul,div,div,msg,result);

var myAccountBalance = 300;
var nikeSbShoes = 799.23;
var coupon = 500;
 
if(nikeSbShoes <= myAccountBalance){
    myAccountBalance -= nikeSbShoes;
    console.log("we just bought some dope shoes");
    console.log("Accountbalance:" + myAccountBalance);
}
else if(nikeSbShoes - coupon <= myAccountBalance){
    console.log("we just bought some dope shoes with a coupon ");
    myAccountBalance -=  nikeSbShoes - coupon;
    console.log("Accountbalance:" + myAccountBalance);
}
else{
    console.log("you to broke for shoes bra ");
}

var student1= "timmy";
var student2 = "janessa";
var student3 = "arun";

var students = [ "timmy", "janessa", "arun" ];
var badkidlist = [];
badkidlist.push(students[0]);
console.log(badkidlist);























