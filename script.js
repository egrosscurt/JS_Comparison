const age = 45;
const isFemale = false;
const driverStatus = "bob";
const name = "Esther";
const totalAmount = 12;

if (age >= 18){

    console.log("Je mag naar binnen");

} else {

    console.log("Sorry, je bent te jong");
} 

if (isFemale){

    console.log("Welkom bij de Ladies Night");

} else {

    console.log("Sorry, het is Ladies Night vandaag");
} 

if (driverStatus == "bob"){

    console.log("Goedzo je bent de bob!");

} else {

    console.log("Zal ik een taxi voor je bellen?");
} 

if (age >= 18 && age <= 25){

    console.log("Je krijgt 50% korting!")
}

else {

    console.log("Helaas, geen korting voor jou");
}

if (name === "Sarah" || name === "Abraham"){

    console.log("Je krijgt een gratis biertje!")
}

else {

    console.log("Helaas, geen gratis bier voor jou")
}

if (totalAmount >= 100){

    console.log("Gratis flesje champagne")
}
else if (totalAmount >= 50){
    console.log("Gratis portie nachos")
}
else if (totalAmount >= 25){

    console.log("Gratis (vega)bitterballen")
}