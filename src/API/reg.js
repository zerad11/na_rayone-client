import axios from "axios";

async function reg(email, password, name) {
    try {
        let response = await axios.post('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/reg', {
            email: email,
            password: password,
            name: name
        })
        console.log(response.data);
    } catch(e) {
        console.log(e);
    }
}

export default reg;