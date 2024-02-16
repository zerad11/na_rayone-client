import axios from "axios";

export function reg(email, password, name) {
    axios.post('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/reg', {
        email: email, // 'arasaki@gmail.com'
        password: password, // 'kikimora222'
        name: name // 'David'
    }).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    });
}

export function auth(email, password) {
    axios.post('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/auth', {
        email: email,
        password: password
    }).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    });
}