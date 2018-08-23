import axios from "axios";

const URL = "http://localhost:5000";

export default {
  user: {
    login: credentials =>
      axios
        .post("/api/signin", credentials, {
          headers: { "Content-Type": "application/json" }
        })
        .then(response => response.data.token),

    register: credentials =>
      axios
        .post("/api/signup", credentials, {
          headers: { "Content-Type": "application/json" }
        })
        .then(response => response.data.token)
  }
};
