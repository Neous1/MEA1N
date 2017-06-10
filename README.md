# MEA1N
yet another MEAN stack adventure (angular 1)




npm i npm g
npm init
npm install express --save
npm install mocha --save-dev
// now delete your node-modules folder
npm install  // reinstalls dependencies
// delete your node-modules folder again
npm install --production
npm install  // again to install mocha

// add folder node_modules to .gitignore

// edit to package.json scripts section
"scripts": {
  "start": "node app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},

// install nodemon - restarts @ changes
sudo npm install -g nodemon

// now at command prompt
$ nodemon

// check for
$ openssl version  // mine returns OpenSSL 1.0.2g  1 Mar 2016

// install mongodb from mongodb.org or google it for your os
// on my ubuntu box I start the mongod service automagically
// I edited /etc/rc.local and put sudo service mongod start at the bottom
// make appropriate changes for your os
// or start mongod in a separate terminal
$ mongodb

// and start mongo in a separate terminal
$ mongo
> show dbs

// video 21 connecting mongodb to a node.js application
$ npm install mongodb --save

// video 25 install mongoose
$ npm install --save mongoose

// install angular locally
$ npm i angular angular-route

// you have to add these script tags
<script type="text/javascript" src="node_modules/angular/angular.js"></script>
<script type="text/javascript" src="node_modules/angular-route/angular-route.js"></script>