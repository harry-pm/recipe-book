# Recipe book #

### Setup for dev ###
- clone repo
- npm install
- setup database with docker, run: 'docker-compose up -d'
- run: 'npm run dev' and visit localhost:3000. A connection with the database will be established and typeORM will have created a table in the database.
- (to access database, run: 'psql -h localhost -p 5555 -U user -d db', then enter the password: "password")

### Steps for deployment ###
The app is deployed on google cloud using docker.
To first run the app with docker locally (optional), run:
- 'docker build -t recipe-book .'
- 'docker run --rm --name recipe-book -e PORT=9999 -p 8080:9999 recipe-book'

### User Storys (MVP) ###
- As a user, I want to submit a recipie so that i can view it again in the future.
- As a user, I want to submit a title, a list of ingredients and an ordered list of steps for each recipe.
- As a user, I want to view a title, a list of ingredients and an ordered list of steps for each recipe.
- As a user, I want to be able to view all recipes that have been submitted.

### Data structure in database ###
id: integer
title: string (256)
ingredients: {string: string} *object of key value pairs* 
steps: text: {string: string} *object of key value pairs* 


### Blockers/Learning points ###
- Generating a key for ingredients and steps list. I discovered that it is not best practise to generate an index that will not always be unique to the data that is being iterated. My solution was to restructure the databse so that any item that would be iterated has a unique id.

- Following the previous comment, after running docker-compose with a new databse and data model, docker skipped some initialiation steps: 'PostgreSQL Database directory appears to contain a database; Skipping initialization'. I learnt that unless the database directory is empty, docker will skip initialisation. Deleting the volume then running it again solved this issue. 
Alternativley, when restructuring the database, rather than creating a new one, I could have modified the table using SQL commands.