const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const md = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
	{
		type: 'input',
		name: 'project',
		message: "What's the title of your project?",
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please write a short description of your project.',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'How can a user install your application?',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What does the user need to know about using your repo?',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What does the user need to know about using your repo?',
	},
	{
		type: 'input',
		name: 'name',
		message: "What's your Github username?",
	},
	{
		type: 'list',
		name: 'license',
		message: 'What type of license do you want?',
		choices: ['MIT', 'Open Software License 3.0', 'Microsoft Public License', 'The Unlicense', 'Educational Community License v2.0', 'Micro'],
		filter: function (val) {
			return val.toLowerCase();
		},
	},
	{
		type: 'input',
		name: 'contribution',
		message: 'What does the user need to know about contributing to your repo?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFileSync(path.join(process.cwd(), fileName), data, 'utf8');
}

// function to initialize program
function init() {
	try {
		inquirer.prompt(questions).then(function (data) {
			writeToFile('README.md', md(data));
			console.log('Success!');
		});
	} catch (err) {
		console.log('Oops, there seems to be an error');
		console.log(err);
	}
}
// function call to initialize program
init();
