import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e4f7b41f2a33ce75431edbeb95cc8183a48e9d1c82fe0eccddd47e115a19781f "
  }
});
