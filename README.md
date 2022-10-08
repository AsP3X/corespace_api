# Corespace API Setup guide

## Sections
- Development


---
<br>

# Development

1. make sure you have all important dependencies installed befor proceeding.

2. run following command to select the correct version of nodejs <br>
| -> `nvm use`

3. create a copy of example.env named ".env"

4. execute following command to create the local database with it's web admin dashboard <br>
| -> `docker-compose up -d`

5. now you can install all the necessary modules by running this command <br>
| -> `yarn install`

6. create the database named "corespace" via the web dashboard or cli

7. connect with mongosh to the database and setup the dev user
with following commands <br>
| -> `mongosh -u root -p developmenttestpassword` <br> 
```sh
db.createUser({user: "dev_testing",pwd: "developmenttestpassword", roles: [{ role: "readWrite", db: "corespace" }]})
```

## now you should be ready to start working