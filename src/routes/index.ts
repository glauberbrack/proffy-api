import express from 'express';

const routes = express.Router();


routes.get('/', (request, response) => {
 
    return response.json('Server running on port 3333')
})

export default routes;