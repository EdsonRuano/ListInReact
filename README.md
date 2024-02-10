# React List

This repository contains the source code for a React application that displays a list of items obtained from the `https://jsonplaceholder.typicode.com/posts` API.

## Prerequisites

To run this project, you'll need to have Docker installed on your system.

- [Docker](https://www.docker.com/get-started)

## Installation and Running

Follow these steps to build and run the application in your local environment:

1. Clone this repository to your local machine using the following command:

    ```
    git clone https://github.com/EdsonRuano/ListInReact.git
    ```

2. Navigate to the project directory:

    ```
    cd ListInReact
    ```

3. Run the following command to build and run the application in a Docker container:

    ```
    docker-compose up --build
    ```

    This will build the container image and then start the "app" service. The application will be available at `http://localhost:3000`.

## Configuration

The URL of the API that the application connects to is defined in the `REACT_APP_API_URL` environment variable. You can modify this variable in the `docker-compose.yml` file as needed.

## Contact

For any questions or suggestions, feel free to contact [Edson Ruano](https://github.com/EdsonRuano).

