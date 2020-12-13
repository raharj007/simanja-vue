import axios, {handleError} from "@/plugins/axios";

export async function data(url = '') {
    return await request(url);
}

export async function create(url = '', data = {}) {
    return await request(url, 'post', data);
}

export async function update(url = '', data = {}) {
    return await request(url, 'put', data);
}

export async function destroy(url = '') {
    return await request(url, 'delete');
}

async function request(url = '', method = 'get', data = null) {
    try {
        let response;
        switch (method) {
            case "get":
                response = await axios.get(url);
                break;
            case "post":
                response = await axios.post(url, data);
                break;
            case "put":
                response = await axios.put(url, data);
                break;
            case "delete":
                response = await axios.delete(url);
                break;
        }
        return {
            error: false,
            data: response.data,
        }
    } catch (error) {
        return handleError(error);
    }
}