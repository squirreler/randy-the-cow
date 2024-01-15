let randyText = document.getElementById('randy-txt');

let helloButton = document.getElementById('say hi');
let mooButton = document.getElementById('moo');
let petButton = document.getElementById('pet');
let buttonClicked = "";
let lastClickedButton = "";

let helloCounter = 0;
let mooCounter = 0;
let petCounter = 0;
let annoyanceCounter = 0;


const responseList = [
    ["*Looks at you* - you have gained its attention", "*Stares*", "*Continues Stairing*", "Looks at you with dissapointment", "*Growls*"], //Response to say hello
    ["*Confused Stairing*", "MOOOoooOOO", "MoooOOOOOOOOOOOOOUUUUnnngggh", "MOOOOOOOOOOOOOOOOOOOOO!!!!!!!!", "MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!"], //Response to moo
    ["*Seems Supprised*", "*Appears to like it*", "MOOOOOOOOOO! *Seems happy*", "MOOooooooooooOOOOOOOOO *Snorts - probably has hand enough now*", "Seriously?"]  //Response to pet
];
function printResponse() {
    let message = "";
    counterValueOffset = 1;
    const responseCounterType = getCorrectCounterType();
    const responseCounterValue = getCorrectCounterValue() - counterValueOffset;
    if (responseCounterValue + counterValueOffset >= 6) {
        message = "Randy is annoyed!!! RUN!!!!!!!!";
        setRandyAngry();
    } else {
        message = responseList[responseCounterType][responseCounterValue];
    }
    randyText.innerHTML = message;
}

function getCorrectCounterType() {
    switch(buttonClicked) {
        case "hello": 
            return 0;
        case "moo":
            return 1;
        case "pet":
            return 2;
    alert('cant find counter')
    }
}

function getCorrectCounterValue() {
    switch(buttonClicked) {
        case "hello": 
            return helloCounter;
        case "moo":
            return mooCounter;
        case "pet":
            return petCounter;
    alert('cant find counter')
    }
}

function setRandyAngry() {
    document.getElementById("randy-img").src="randy-angry.png";
}


//Button agnostic functions
addEventListener("click", printResponse)
//Button identification functions
helloButton.addEventListener("click", helloClicked);
mooButton.addEventListener("click", mooClicked);
petButton.addEventListener("click", petClicked);

//This makes me cringe
function helloClicked() {
    lastButtonClicked = buttonClicked;
    buttonClicked = 'hello';
    helloCounter++;
    setRandyTame()
}
function mooClicked() {
    lastButtonClicked = buttonClicked;
    buttonClicked = 'moo';
    mooCounter++;
    setRandyTame()
}
function petClicked() {
    lastButtonClicked = buttonClicked;
    buttonClicked = 'pet';
    petCounter++;
    setRandyTame()
}
function setRandyTame() {
    document.getElementById("randy-img").src="randy.png";
}


