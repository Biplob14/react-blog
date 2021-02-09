# Getting Started with React Blog

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this project first install necessary packages using following command
### `npm install`
This will install all necessary packages and files

-Run following command to start npm server to show output
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

A json database is created to store data for this project. In order to get those data run the command-

### `npx json-server --watch data/db.json --port 8000`

The different number of port is selected in order to avoid running both server in same port. This will make the json server online to serve data for the blog.

This blog has features of- <br>
- Creating new blog 
- Deleting an existing blog
- Used route features of react to make it work fast
- Connected with json database in order to store or modify data

#### Many more-
<!-- npx json-server --watch data/db.json --port 8000 -->