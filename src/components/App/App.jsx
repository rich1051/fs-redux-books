import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  // TODO - GET Book List from server
  // axios.get('/stuff')
  // .then(when response comes back, update redux)

  const fetchBookList = () => {
    axios
      .get("/books")
      .then((response) => {
        // send data to redux store with dispatch
        dispatch({ type: "SET_BOOK_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log("Error fetching book list:", error);
      });
  };

  // {useEffect} here:
  useEffect(() => {
    fetchBookList();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Books w/ Redux!</h1>
      </header>
      <main>
        <BookForm fetchBookList={fetchBookList} />
        <BookList />
      </main>
    </div>
  );
}

export default App;
