
import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://intense-dusk-47624.herokuapp.com/';


export async function fetchTrucks() {
    try {
        const response = await request.get(`${URL}trucks`);
        return response.body;
    } catch (err) {
        throw err;
    }

}

export async function fetchTruck(someId) {
    try {
        const response = await request.get(`${URL}trucks/${someId}`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchModels() {
    try {
        const response = await request.get(`${URL}models`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function createTruck(newTruck) {
    try {
        await request
            .post(`${URL}trucks`)
            .send(newTruck);

        return;
    } catch (err) {
        throw err;
    }
}

export async function updateTruck(someId, newTruck) {
    try {
        await request
            .put(`${URL}trucks/${someId}`)
            .send(newTruck);

        return;
    } catch (err) {
        throw err;
    }
}

export async function deleteTruck(someId) {
    try {
        await request.delete(`${URL}trucks/${someId}`);

        return;

    } catch (err) {
        throw err;
    }
}
