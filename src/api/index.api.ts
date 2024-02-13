import axios from "axios";
import AuthAPI from "./auth/auth.api";

const coreClient = axios.create({
  baseURL: "https://port-0-auth-server-qrd2als49b8m4.sel5.cloudtype.app",
  withCredentials: true,
});

class API {
  static auth = new AuthAPI(coreClient);
}

export default API;
