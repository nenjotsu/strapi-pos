# strapi-pos (WIP)

A Strapi v4 base using PostgreSQL, Typescript, Docker and Docker Compose

## Development deployment

1. Install `npm` dependencies (run command in `app` directory)

    ```bash
    npm i
    ```

2. Launch development database

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d db
    ```

3. Run Strapi in development mode

    ```bash
    npm run develop
    ```

4. Shutdown development database (optional)

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
    ```

## Production deployment

1. Build Strapi admin panel (run command in `app` directory)

    ```bash
    npm run build
    ```

2. Run with Docker Compose (run in repository root directory)

    ```bash
    docker-compose up -d --build
    ```
