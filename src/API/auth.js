import axios from "axios";

async function auth(email, password) {
    try {
        let response = await axios.post('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/auth', {
            email: email,
            password: password
        })
        console.log(response.data);
    } catch(e) {
        console.log(e);
    }
}

export default auth;