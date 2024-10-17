const alarm = process.argv.splice(2)
if (alarm.length === 0){
  console.log("please enter valid time");
} 
for(let time of alarm){
  if (!Number(time)){
    console.log("you have entered string");
  }
  if (Number(time) < 0){
    console.log("You have entered -ve number");
  }

  setTimeout(() => {
    process.stdout.write("O");
  },Number(time) * 1000)
}
