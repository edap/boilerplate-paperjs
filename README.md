This boilerplate combines [webpack](https://webpack.js.org/) and [paperjs](http://paperjs.org/)

### Installation
clone this respository, then run `yarn install`


### Usage
Edit the file `src/file.paper.js`. This file contains an example copied from the Paper.js website.

Delete its content, add your paperscript code and save it.

`npm start` starts a server on the port 8000. If everything went good you should see your code example running.

If you want to save your sketch and upload it on your website, run `webpack`. This command compiles a bundle.js file and an html file in the folder `www`.
