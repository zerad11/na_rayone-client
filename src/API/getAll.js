import axios from "axios";

export async function getAll(path) {
    try {
        let responce = await axios.get('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/${path}/');
        return responce
    } catch(e) {
        console.error(e)
        throw e
    }
}