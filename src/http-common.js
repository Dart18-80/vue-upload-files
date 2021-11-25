import axios from "axios";

export default axios.create({
  baseURL: "https://kq2e0o7e62.execute-api.us-east-1.amazonaws.com/v1/upload",
  headers: {
    "Content-type": "application/json"
  }
});