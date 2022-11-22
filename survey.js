const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (name) => {
  rl.question('\rWhats an activity you like doing? ', (activity) => {
    rl.question('\rWhat do you listen to while doing that? ', (music) => {
      rl.question('\rWhich meal is your favourite of the day? ', (meal) => {
        rl.question('\rWhats your favourite food to eat for that meal? ', (favouriteFood) => {
          rl.question('\rWhich sport is your absolute favourite? ', (sport) => {
            rl.question('\rWhat is your superpower? What are you amazing at? ', (superpower) => {
              console.log(`\n\r${name} loves listning to ${music} while ${activity}. LOVES ${favouriteFood} for ${meal}. Prefers ${sport} over any other stupid sport and is AMAZING at ${superpower} `);
              rl.close();
            });
          });
        });
      });
    });
  });
});


