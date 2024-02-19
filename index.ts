import app from './src/app';

const port = 3100;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
