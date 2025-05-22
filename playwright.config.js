// playwright.config.js
const { devices } = require('@playwright/test');
const { trace } = require('console');

const config = {
  testDir: './tests', // Directory where your test files are located
  timeout: 60*1000, // Maximum time one test can run
  expect: {
    timeout: 100*100, // Timeout for expect statements
  },
  reporter: 'html', // Use the HTML reporter
  projects : [

   {
    name :  'firefox',
    use : { 
      browserName: 'chromium',   // Ensure this is valid and available
      headless: false, // Ensures headed mode is used 
      screenshot : 'on',
      trace : 'on'
    } 
   } ,
   

  ],
  
};

module.exports = config; // Correctly export the configuration object 



