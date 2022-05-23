const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    }
  ])
  .then(answers => console.log(answers));

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(title);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });