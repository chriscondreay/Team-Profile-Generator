const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const jobQuestions = [
  {
    type: 'input',
    message: "What is your employee's name?",
    name: 'name'
  },
  {
    type: "input",
    message: "What is your employee's ID number?",
    name: "ID"
  },
  {
    type: "input",
    message: "What is your employee's email address",
    name: "email",
  },
  {
    type: "list",
    message: "What is the job you are assigning to your employee?",
    name: "choice",
    choices: [
      "Manager",
      "Intern",
      "Engineer"
    ],
  }
];


