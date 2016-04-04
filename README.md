# My Little Amazon S3

Follow me on GitHub!

In this a project I used Rails for the Back-end and Angularjs Front-end, and a little Amazon S3 created by me. 
The key is that I also implemented a feature that simulate AWS3. Basically with Angularjs you can upload a file, the code will transform this file, will send to rails a token, then Rails will copy this token and create a file in a directory named S3 into this project, with a uniq name, it will take the path asigned into rails and store it in a database, when this file is required, rails takes this file, create an image and send the url to angular, angular pass it to the view and then, it will be displayed. You will need to set environment variables or change the path in the rails controller.

Technology Used
---------------
Ruby on Rails Back End
AngularJS Front End

Protractor
Karma
Rspec

Installation Instructions
-------------------------
```
git clone https://github.com/hedudelgado/Recipes-project
$cd RecipesAPI
$bundle install
$rake db:create
$rake db:migrate
$npm install bower -g
$rake bower:install
$rake routes
```

Run the servers
---------------

```
Back End (within backend directory) ->rails s
Go to http://localhost:3000 (or any other path the Api uses) in your browser, to make sure the server is running.
```
```
Front end (within front end directory)-> npm start
Go to http://localhost:8000 (or any other path the Angular uses) in your browser, to make sure the server is running.
```



Testing Instructions
--------------------

RSpec (unit and feature tests, within back end directory)

```
$rails g rspec:install
$rspec
```

JavaScript/Angular - Testing
-----------------------------

Make sure the rails server is running for testing angular as they interact within the end to end tests(e2e).
```
$rails s
```

Make sure you are in Frontend directory for Angular - e2e tests, in a separate command line run:
```
$npm install
$npm run Protractor
```

To test drive the app, make sure you have the Rails and Angular severs running in different command line taps, then in your brower visit: For Rails http://localhost:3000 For Angularjs http://localhost:8000

