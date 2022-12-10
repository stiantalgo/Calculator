let obj = [
    string = "nbllbolabalbaooddddbb044",
    string2 = "12345678",
    string3 = "1234412412412",
];

obj.push(string4 = "HEJ");
obj.push(string5 = "HdawdadadwawdawdawdawdawdaEJ");
obj.push(string6 = "HdEJ");
obj.push(string7 = "HEawdJ");

let boxLen = 60;
let symbol = "¤";



hasBox(boxLen);
hasSpaces(boxLen);
obj.forEach(obb => {
    let emptySpace = boxLen - obb.length;   // ledig plass i boxen
    let sides = emptySpace / 2;             // 
    let spaces = sides -2;                  // fjerna for å få plass the #
    let myString ="";
    let spaceStr = "";

    for(let i = 0; i <= spaces; i++){       // fylle på spaces i spacestring
        spaceStr += " ";
    }

    if(obb.length % 2 != 0){
        myString = `${symbol}${spaceStr}${obb}${spaceStr} ${symbol}`;
    }else{
        myString = `${symbol}${spaceStr}${obb}${spaceStr}${symbol}`;
    }
    console.log(myString);
});
hasSpaces(boxLen);
hasBox(boxLen);

function hasBox(len){
    var hashStr = "";
    for(let i = 1; i <= len; i++){
        hashStr+=`${symbol}`;
    }
    console.log(hashStr);
}

function hasSpaces(len){
    var hashStr = "";
    for(let i = 1; i <= len-2; i++){
        hashStr+=" ";
    }
    console.log(`${symbol}${hashStr}${symbol}`);
}


