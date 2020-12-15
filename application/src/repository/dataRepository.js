import axios, {handleError} from "@/plugins/axios";

export async function data(url = '') {
    try {
        const response = await axios.get(url);
        return {
            error: false,
            data: response.data
        };
    } catch (error) {
        return handleError(error);
    }
}