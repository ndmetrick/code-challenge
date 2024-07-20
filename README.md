# Nate Metrick's DataMade Code Challenge: Parserator

Welcome to my submission for the DataMade code challenge! 👋

Parserator can take input strings that represent addresses (like `123 main st chicago il`)
and split them up into their component parts.

To get started, clone this repo and follow the instructions below.

## Installation

Development requires a local installation of [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/).

Once you have Docker and Docker Compose installed, build the application containers:

```
docker compose build
```
or, if using V1 of Docker Compose:

```
docker-compose build
```

Next, run the app:

```
docker compose up
```

or, if using v1 of Docker Compose:

```
docker-compose up
```

You should be able to visit the app at http://localhost:8000.

## Play with the Parserator

To use the parserator, follow these steps:

1. Open your web browser and navigate to [http://localhost:8000](http://localhost:8000).
2. Enter an address string (e.g., `123 main st chicago il`) into the input form.
3. Submit the form to see the parsed components of the address (or the error message, depending on what you decide to type in).

### Example Inputs

- ✅ Valid: `123 main st chicago il`
- ❌ Invalid: `123 main st chicago il 123 main st`

The results will be displayed on the page, showing the components of the address and the address type.

## Run tests

You can run the tests using Docker:

docker compose -f docker-compose.yml -f tests/docker-compose.yml run --rm app
