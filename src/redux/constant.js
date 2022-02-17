export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/v1"
    : "https://learn-app-server.herokuapp.com/v1";
//http://localhost:5000/v1
