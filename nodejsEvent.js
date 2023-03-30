const EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('waterfull', ()=>{
    console.log("Please Turn off motor")


    setTimeout(() => {
        console.log("Please turn off motor . Its a gental remainder")
    }, 3000);


    // setInterval(() => {
    //     console.log(" Please turn off motor it is last remainder");
    // }, 5000);
})



// use this line for call the function name waterfull,
myEmitter.emit('waterfull');

console.log("The Script is running");

console.log("script is still running");
