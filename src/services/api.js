import axios from 'axios';

const BASE_URL = 'https://back-project-mywallet.herokuapp.com';

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

async function createUser(user) {
    await axios.post(`${BASE_URL}/user`, user);
}

async function login(data) {
    const token = await axios.post(`${BASE_URL}/`, data);
    return token;
}

async function createRecord(token, data) {
    const config = createConfig(token);

    await axios.post(`${BASE_URL}/mywallet`, data, config);
}

async function getUserData(token) {
    const config = createConfig(token);

    const userRecords = await axios.get(`${BASE_URL}/mywallet`, config);
    return userRecords;
}

async function logout(token) {
    const config = createConfig(token);

    await axios.delete(`${BASE_URL}/logout`, config);
}

const api = {
    createUser,
    login,
    createRecord,
    getUserData,
    logout,
};

export default api;
