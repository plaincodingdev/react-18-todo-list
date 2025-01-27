# Run the Project in Developer Mode

To start the project in developer mode, use the following command in your terminal:

```bash
npm install # Install dependencies
npm run dev # Start the project in developer mode
```

## Create and Run Docker Image

Use the following command to build the Docker image. This command tags the image with a name to make it easier to reference later:

```bash
docker build -t react-18-todo-list:latest .
```

After the image has been built, run the container with the following command:

```bash
docker run --rm -it -p 5173:5173 react-18-todo-list:latest
```
