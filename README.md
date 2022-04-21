# BikeHype

### Compiling

Compile:

```mvn clean install```

Compile and create a docker image (docker daemon must be running!):

```mvn spring-boot:build-image```

### Running

Run in docker using docker-compose:

```docker-compose -f docker-compose.yaml up```