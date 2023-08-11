let mbSpeed = document.querySelector("#mbs"),
kbSpeed = document.querySelector("#kbs"),
bitSpeed = document.querySelector("#bits"),
info = document.querySelector("#info"),
btn = document.querySelector("#btn");
let startTime, endTime;
let imageSize = "";
let image = new Image();
let totalBitSpeed =0,
totalKbSpeed =0,
totalMbSpeed =0,
testCompleted = 0;

//get random image for unspalsh.com

let imageApi = "https://source.unsplash.com/random?topic=nature";
//when image loads
image.onload = async function(){
    endTime = new Date().getTime();

    //get image size
    await fetch(imageApi).then((response)=>{
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    })
};

//function to calculate speed:
function calculateSpeed(){
    let timeDuration = (endTime - startTime) / 1000
    //total bits
    let totalBits = imageSize * 8;
    let speedInBts = (totalBits / timeDuration).toFixed();
    let speedInKbs = (speedInBts / 1024).toFixed();
    let speedInMbs = (speedInKbs / 1024).toFixed();
        bitSpeed.innerHTML = `in Bits: ${speedInBts}`;
        kbSpeed.innerHTML = `in Kbs: ${speedInKbs}`;
        mbSpeed.innerHTML = `in Mbps: ${speedInMbs}`;
        info.innerHTML = "test Completed!"
}
async function intitialise(){
    startTime = new Date().getTime()
    image.src = imageApi;
}
btn.addEventListener("click",intitialise);