const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees=[];

function writeHTML(){
  fs.writeFile(outputPath, render(employees), function(error){
    if(error){
      throw error
    }
    console.log("Write succeeded!")
  })
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


  function basicInfo()
  {
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is their ID number?"
        },
        {
          type: "input",
          name: "email",
          message: "What is their email?"
        },
        {
          type: "list",
          name: "role",
          message: "What is their role?",
          choices:["Intern","Manager","Engineer"]
        }
      ])
      .then(function(answers) {
        if(answers.role=="Intern"){
          intern(answers);
        }
        if(answers.role=="Manager"){
          manager(answers);
        }
        if(answers.role=="Engineer"){
          engineer(answers);
        }
      });
    }

function intern(answers){
    return inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What school do they go to?"
      },
      {
        type: "list",
        name: "anotherEmployee",
        message: "Is there another employee?",
        choices:["Yes","No"]
      }
    ])
    .then(function(answers1) {
      if(answers1.anotherEmployee=="Yes"){
        const e = new Intern(answers.name, answers.id, answers.email, answers1.school)
        employees.push(e)
        basicInfo()
      }
      if(answers1.anotherEmployee=="No"){
        const e = new Intern(answers.name, answers.id, answers.email, answers1.school)
        employees.push(e)
        writeHTML()
      }
    })
  }

function manager(answers){
    return inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?"
      },
      {
        type: "list",
        name: "anotherEmployee",
        message: "Is there another employee?",
        choices:["Yes","No"]
      }
    ])
    
    .then(function(answers1) {
      if(answers1.anotherEmployee=="Yes"){
        const e = new Manager(answers.name, answers.id, answers.email, answers1.officeNumber)
        employees.push(e)
        basicInfo()
      }
      if(answers1.anotherEmployee=="No"){
        const e = new Manager(answers.name, answers.id, answers.email, answers1.officeNumber)
        employees.push(e)
        writeHTML()
      }
    })
  }

function engineer(answers){
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is their github account?"
    },
    {
      type: "list",
      name: "anotherEmployee",
      message: "Is there another employee?",
      choices:["Yes","No"]
    }
  ])
  .then(function(answers1) {
    if(answers1.anotherEmployee=="Yes"){
      const e = new Engineer(answers.name, answers.id, answers.email, answers1.github)
      employees.push(e)
      basicInfo()
    }
    if(answers1.anotherEmployee=="No"){
      const e = new Engineer(answers.name, answers.id, answers.email, answers1.github)
      employees.push(e)
      writeHTML()
    }
  })



// console.log(render(employees));
// fs write file

}
basicInfo()
// function engineer(){

// }

// function manager(){

// }



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```