var executePaperScript = require('./file.paper.js');

// Wait for canvas to be created
window.onload = function () {
  // Call the module to create a paperjs scope and execute the code
  var scope = executePaperScript('myCanvas');
  console.log(scope);
}
