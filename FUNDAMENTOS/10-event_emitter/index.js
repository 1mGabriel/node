const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("programa iniciado");
});

console.log("Antes iniciação");
eventEmitter.emit("start");
console.log("Após iniciação");
