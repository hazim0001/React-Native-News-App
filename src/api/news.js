import axios from "axios";

export default axios.create({
  baseUrl: "https://newsapi.org/v2",
});
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9e0575e7c2dc4292ac1571d3b8167973
