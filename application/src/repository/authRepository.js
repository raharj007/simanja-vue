import axios, {handleError} from "@/plugins/axios";

export async function login(credentials = {}) {
  try {
    const response = await axios.post("/login", credentials);
    return {
      error: false,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
}

export async function getInfo() {
  try {
    const response = await axios.get("/info");
    return {
      error: false,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
}
