
# REST API FROM VUE.JS

  REST APIS : Representational State Transfer Application Programming Interface.

## What is an API?
An API is a set of programming code that enables data transmission between one software product and another. It also contains the terms of this data exchange.
## What Is a REST API?
What is a REST API? REST is an acronym for Representational State Transfer — an almost meaningless description of the most-used web service technology! A REST API is a way for two computer systems to communicate using the HTTP technologies found in web browsers and servers.
## How do APIs work?
Simply put, without APIs, you wouldn’t be able to order that birthday present for your mother on Wayfair.com, spin up a Linux server on the Amazon Elastic Compute Cloud, or personalize your Google homepage with gaming mini-applications or a photo collage. The easiest way to digest what an application programming interface does is to know that it is an interface that allows one application to communicate with another via commands designed by programmers.
## The Importance of APIs
With a focus on modern B2B usage, an application programming interface can be a critical component to integrating data flows with customers and partner systems. It can even add increased flexibility to traditional types of robust exchange such as managed file transfer (MFT) and EDI.
## What are advantages of REST API?

One of the key advantages of REST APIs is that they provide a great deal of flexibility. Data is not tied to resources or methods, so REST can handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia.
# Create call REST API And Reference.
### API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Building a Node js REST API is a four-step process. Follow the steps given below to build a secure Node js REST API:

#### Step 1: Create the Required Directories
#### Step 2: Create your First App Express API
#### Step 3: Creating the User Module
#### Step 4: Creating the Auth Module
#### Step 1: Create the Required Directories

## The first step involved in building a Node js REST API requires you to create directories that will contain the code for the Node js REST API.

## To begin with, open the Command Line Terminal on your system and navigate to the record where you usually create your projects and build a new directory which will consist of the Node js REST API’s code there using the following command:
#### mkdir express-ads-api
### Now move to the directory you just created and practice npm install to frame a new project:
#### npm init -y
## If you open this directory in a text editor or an IDE, you’ll see that the npm command you used created a file called package.json. If you open this file, you’ll come across something like this:
Content of package.json File
Image Source: dzone.com
This data is currently quite insignificant and does not contain a lot of valuable information. Nevertheless, as you begin computing mandates for your project to create the Node js REST API, this file will grow in size. Following that, you will create a new directory called src within the design source by using the following command:
mkdir src
## The goal here is to include all your reference code that will be used to create the Node js REST API within this directory. So, after creating this directory for the Node js REST API, create a new file called index.js within it and add the following code to it:
    // ./src/index.js 
    console.log('Hello there!'); 
After saving this file, run the following command to experiment with it:
node src
Upon running this command, you will see a ‘Hello there!’ message prompted on your screen.
Step 2: Create Your First App Express API
Now, the project you just created simply logs a latent message. As this might not add much value to your project, you can start developing your Node js REST API. Follow the steps given below to do so:

Open your command line and add the following code to it:

 npm install body-parser cors express helmet morgan
This command will create the following five dependencies in your design:

body-parser: This dependency will be used to convert the base of incoming applications into JavaScript objects.
cors: Cross-Origin Resource Sharing(CORS) is a dependency that is used to configure Express to combine headers specifying that your Rest API accepts requests from any source. 
express: This dependency denotes the Express library.
helmet: This module establishes different HTTP headers to safeguard Express APIs.
morgan: This package extends your Express Rest API’s logging capabilities.
You need to mark two items in your project after initiating the previous command. The package.json file with all the libraries before it will include an original feature called dependencies.
This is how NPM determines which dependencies are required by the project. Second, in the project root, you’ll find a new file named package-lock.json.
 # It might take a few seconds based on your Internet connection for NPM to connect these dependencies. Once the dependencies are connected, you can initiate the index.js file and replace its code as follows to create the Node js REST API:
  ## { 
    // ./src/index.js
    // importing the dependencies
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const helmet = require('helmet');
    const morgan = require('morgan');
   }
   ## {
    // defining the Express app
    const app = express();
    // defining an array to work as the database (temporary solution)
    const ads = [
    {title: 'Hello, world (again)!'}
    ];
    }
    // adding Helmet to enhance your Rest API's security
    app.use(helmet());

    // using bodyParser to parse JSON bodies into JS objects
    app.use(bodyParser.json());

    // enabling CORS for all requests
    app.use(cors());

    // adding morgan to log HTTP requests
    app.use(morgan('combined'));

    // defining an endpoint to return all ads
    app.get('/', (req, res) => {
    res.send(ads);
    });

## 
    {
       // starting the server
    app.listen(3001, () => {
    console.log('listening on port 3001');
    });
This code represents two important things:

An array called ads functions briefly as an In-Memory database.
An endpoint that accepts HTTP GET requests and, when triggered, returns all of the items in the ads array.
Step 3: Creating the User Module
You can use Mongoose, an Object-Oriented Data Modelling(ODM) library to create the User Guide within the User Schema that will help you in creating a Node js REST API. Follow the steps given below to create the user module for your project:

Create a new schema by using the commands given below:
## 
    { /users/models/users.model.js:
    const userSchema = new Schema({
	firstName: John,
	lastName: John,
	email: John,
	password: John,
	permissionLevel: Number
    });
Now, simply connect the schema to the User Module by using the following command.
const user model = mongoose.model('Users', userSchema);
Once you have connected the schema to the User Module, you can leverage this model to perform all of the CRUD operations that are required within the Express endpoints.
You can configure the “Create User” operation by finding the way in users/routes.config.js:
 ##
    {  app.post('/users', [
	   UsersController.insert
    ]);
This is enticed into the Express app via the main index.js file. As determined in /users/controllers/users.controller.js, the UsersController object is required from the controller, where you can appropriately set a new password:
##
    exports.insert = (req, res) => {
      	let salt = crypto.randomBytes(16).toMartin('console log');
	let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest("console log");
	req.body.password = salt + "$" + hash;
	req.body.permissionLevel = 1;
	UserModel.createUser(req.body).then((result) => {
	res.status(201).send({id: result._id});
	});
};
You can now test the Mongoose model by starting the server (npm init start) and sending a POST request to /users with dummy JSON data:
{
	"firstName" : "Dina",
	"lastName" : "Reva",
	"email" : "dina.revina@outlook.com",
	"password" : "qwertyuiopl"
}
You can leverage a variety of tools to accomplish this. Curl is a popular CLI choice, whereas Insomnia and Postman are the recommended GUI tools. You can practice JavaScript, for example, by viewing the console log of the browser’s built-in development tools:
fetch('http://localhost:3600/users', {
method: 'POST',
headers: {
	"Content-type": "application/json"
    },

##
    body: JSON.stringify({
	"firstName": "John",
	"lastName": "Doe",
	"email": "doe.john@outlook.com",
	"password": "qwertyuiopl"
    })
    }).then(function(response) {
	return response.json();
    }).then(function(data) {
	console.log('Request succeeded with JSON response', data);
    }).catch(function(error) {
	console.log('Request failed', error);
    });
Now, you will be required to attach the createUser procedure to the model in users/models/users.model.js for adding functionalities to your Node js REST API:
##	

    exports.createUser = (userData) => {
    const user = new User(userData);
	return user.save();
     };
If you want to check if the user exists or not, you will need a “Get User by Id” function for the following endpoint: users/:userId. This will add a GET functionality to your Node js REST API

Create a way in /users/routes/config.js by using the following command:

##	
    app.get('/users/:userId', [
	UsersController.getById
    ]);
Once you have successfully created a way, you will need to create a manager in /users/controllers/users.controller.js:
exports.getById = (req, res) => {
	UserModel.findById(req.params.userId).then((result) => {
	res.status(200).send(result);
	});
    };
  
Finally, in /users/models/users.model.js, add the findById method to the model:

    exports.findById = (id) => {
	return User.findById(id).then((result) => {
	result = result.toJSON();
	delete result._id;
	delete result.__v;
	return result;
	});
    };
You will come across some responses that are somewhat similar, such as this:
##
    {
	"firstName": "vikram",
	"lastName": "kumaR",
	"email": "Vikramkumar11212797@gmail.com",
	"password": "1234456677899",
	"permissionLevel": ANY,
	"id": "ABCDRYGH"
    }  
  You will also be needed to perform some additional validation for changes that should be limited to the user in question or an administrator because only an administrator can change the permission level. You can put that aside for the time being and get back to it after the Auth Module is installed. For the time being, the controller will display something like this:

