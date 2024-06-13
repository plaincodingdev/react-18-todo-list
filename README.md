# Run the Project in Developer Mode

To start the project in developer mode, use the following command in your terminal:

```bash
npm install # Install dpendencies
npm run dev # Start the project in developer mode
```

Once the application is running, you can access the Swagger UI to test and interact with your API. Open your preferred web browser and navigate to:

```bash
http://localhost:5173/
```

## Create and Run Docker Image

Use the following command to build the Docker image. This command tags the image with a name to make it easier to reference later:

```bash
docker build -t react-18-todo-list .
```

After the image has been built, run the container with the following command:

```bash
docker run --rm -it -p 5173:5173 react-18-todo-list
```
