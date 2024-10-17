process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else if (key === 'b'){
    console.log('beep!');
  } else if (Number(key)) {
    console.log(`setting timer for ${key} seconds...`)
    setTimeout(() => {
      console.log("beep!");
    },Number(key) * 1000)
  } else{
    console.log("Invalid input try again!")
  }
});
   