const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to sowjisam's quiz on FRIENDS");

/**
 * list of something is an array
 */

const queBank = [
	{
		question: `
	whose is my best friend?
	a: bhavya
	b: denish kumar 
	c: ramya\n`,
		answer: "b"
	},
	{
		question: `
	iam the good bignner to any one?
	a: yes
	b:no\n`,
		answer: "a"
	},
	{
		question: `
	everyone said, "hyd is the good place"?
	a: yes,good place
	b: not good place
	c: both a and b condtions are not true
	d: both a and b conditions are true\n`,
		answer: "a"
	},
	{
		question: `
  dhoni is the best cricket batsman?
	a: he is a good batsman
	b: he is a never good batsman
	c: a and b are not true \n`,
		answer: "a"
	}
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log("right answer");
			questionIndex++;
			serve();
		} else {
			console.log("wrong answer");
			console.log("try again");
			question();
		}
	});
}

function serve() {
	if (isQuestionBankExhausted()) {
		console.log("thanks for playing....");
		rl.close();
	} else {
		rl.question("what do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("thanks for playing....");
				rl.close();
			}
		});
	}
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();
