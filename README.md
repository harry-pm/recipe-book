# Recipe book #

### Setup for dev ###
- clone repo
- npm install
- setup database with docker, run: 'docker-compose up -d'
- (to access database, run: 'psql -h localhost -p 5555 -U user -d db', then enter the password: "password")
- run: 'npm run dev'

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
title: character varying(256)
ingredients: text 
steps: text 

ingredients and steps are entered as a comma separated string and received as an array of strings, where each string in the array ends at where a comma was entered

### Blockers ###
- Generating a key for ingredients and steps list. I discovered that it is not best practise to generate an index that will not always be unique to the data that is being iterated. Solution may be to restructure the db.
