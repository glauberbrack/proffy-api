import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
 
    return response.json('Server running on port 3333')
})


app.listen(3333);