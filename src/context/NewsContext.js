import createDataContext from "./createDataContext";
import axios from "axios";

const newsReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "fetch_news":
      return payload;
    case "show_news":
      return payload;
    case "delete_post":
      return state.filter((news) => news.id !== payload.id);
    case "edit_post":
      return state.map((post) => {
        return post.id == payload.id ? payload : post;
      });
    default:
      return state;
  }
};

const addNews = (dispatch) => {
  try {
    return async (news, callBack) => {
      await axios.post(
        "https://6d1c-2c0f-fc89-8017-4668-8131-7c4c-ffef-ea45.ngrok.io/articles",
        { ...news }
      );

      if (callBack) {
        callBack();
      }
    };
  } catch (error) {
    alert("error.message");
  }
};

const showNews = (dispatch) => {
  try {
    return async (callBack) => {
      const response = await axios.get(
        "https://6d1c-2c0f-fc89-8017-4668-8131-7c4c-ffef-ea45.ngrok.io/articles"
      );
      dispatch({ type: "show_news", payload: response.data });

      if (callBack) {
        callBack();
      }
    };
  } catch (error) {
    alert("error.message");
  }
};
const deleteNews = (dispatch) => {
  try {
    return async (id) => {
      console.log(id);
      await axios.delete(
        `https://6d1c-2c0f-fc89-8017-4668-8131-7c4c-ffef-ea45.ngrok.io/articles/${id}`
      );
      dispatch({ type: "delete_news", payload: { id: id } });
    };
  } catch (error) {
    alert("error.message");
  }
};

const fetchNews = (dispatch) => {
  try {
    return async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: "business",
          apiKey: "9e0575e7c2dc4292ac1571d3b8167973",
        },
      });
      // console.log(response.data);

      dispatch({ type: "fetch_news", payload: response.data.articles });
    };
  } catch (error) {
    alert("Something went wrong we cant fetch your blog posts at the moment.");
  }
};

export const { Context, Provider } = createDataContext(
  newsReducer,
  { fetchNews, addNews, showNews, deleteNews },
  []
);
