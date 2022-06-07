// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = () => {
  rl.question('What is your name? ', (name) => {
    rl.question('What is something you like to do? ', (activity) => {
      rl.question('What do you listen to while doing that? ', (music) => {
        rl.question('What is your favorite meal? ', (meal) => {
          rl.question('What is your favorite thing to have during that meal? ', (faveFood) => {
            rl.question('What is your favorite sport? ', (sport) => {
              rl.question('If you could have one superpower, what would it be? ',(superPower) => {
                name = name.trim();
                name = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
                activity = activity.trim();
                music = music.trim();
                faveFood = faveFood.trim();
                sport = sport.trim();
                superPower = superPower.trim();
  
                console.log(`${name} loves listening to ${music} while ${activity}, having ${faveFood} at ${meal}, loves ${sport}, and would love to have the power of ${superPower}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

survey();





