# BikeHype

### Backend

#### Compiling

Compile:

`mvn clean install`

Compile and create a docker image (docker daemon must be running!):

`mvn spring-boot:build-image`

#### Running

Run in docker using docker-compose:

`docker-compose -f docker-compose.yaml up`

### Frontend

#### Compiling

Compile:

`npm build`

#### Running

`npm start`

or if it the app was first built with `npm build`:
 ```
 cd build
 npm serve
 ```