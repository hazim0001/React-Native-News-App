import createDataContext from "./createDataContext";

const newsReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "fetch_posts":
      return payload;
    case "add_post":
      return [
        ...state,
        { title: payload.title, id: payload.id, content: payload.content },
      ];
    case "delete_post":
      return state.filter((blog) => blog.id !== payload.id);
    case "edit_post":
      return state.map((post) => {
        return post.id == payload.id ? payload : post;
      });
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  newsReducer,
  // { addNews, fetchNews, deleteNews },
  []
);
