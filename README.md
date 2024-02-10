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

## Contribution

If you'd like to contribute to this project, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and ensure the tests pass.
4. Commit your changes (`git commit -am 'Add a new feature'`).
5. Push your branch to GitHub (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## License

[Specify the license that applies to your code, for example: MIT License, Apache License 2.0, etc.]

## Contact

For any questions or suggestions, feel free to contact [Edson Ruano](https://github.com/EdsonRuano).

