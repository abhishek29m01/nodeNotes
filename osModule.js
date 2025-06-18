const os=require('os');

console.log("OS Architecture:",os.arch());
// let kb=os.totalmem();
// let mb=kb/1024;
// let gb=mb/1024;
// console.log(`Total memory:${gb}GB`)
console.log("Total memory:",os.totalmem()/1024**2,"GB")
console.log("Free Memory:",os.freemem()/1024**2,"GB")
console.log("Operating System:",os.platform())
console.log("User information:",os.userInfo());
console.log("Host Name:",os.hostname())