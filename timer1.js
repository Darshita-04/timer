const alarm = process.argv.splice(2)

// check if user provided any input
if (alarm.length === 0){
  console.log("please enter valid time");
} 

for(let time of alarm){
  // check if user entrered valid input it should not be -ve number or string
  if (!Number(time)){
    console.log("you have entered string");
  }
  if (Number(time) < 0){
    console.log("You have entered -ve number");
  }

  setTimeout(() => {
    process.stdout.write("beep!");
  },Number(time) * 1000)
}
