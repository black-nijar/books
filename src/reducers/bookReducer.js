import {
  DATA,
  IMAGE_UPLOAD,
  INPUT_NAME,
  HANDLE_PROGRESS,
} from "../actions/types";

const initState = [];

export const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case DATA: {
      var books = [];
      for (let key in action.books) {
        const bookId = action.books[key].bookId;
        const bookName = action.books[key].bookName;
        const bookAuthor = action.books[key].bookAuthor;
        const bookImageurl = action.books[key].bookImageurl;
        const likes = action.books[key].likes;
        const purchasedBy = action.books[key].purchasedBy;
        books.push({
          bookId,
          bookName,
          bookAuthor,
          bookImageurl,
          likes,
          purchasedBy,
        });
      }
      return {
        users: action.users,
        books: books,
      };
    }
    case IMAGE_UPLOAD:
      const { image } = action;
      return {
        ...state,
        image: image,
      };

    case HANDLE_PROGRESS:
      return { progress: action.progress };

    default:
      return state;
  }
};
