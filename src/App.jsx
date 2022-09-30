import { Provider } from "react-redux";
import { store } from "./store/store";
import MakeTodos from "./components/makeTodos";
import NewTodo from "./components/todoToMake";
import SearchBar from "./components/searchTodo";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NewTodo />
        <SearchBar />
        <MakeTodos />
      </Provider>
    </>
  );
};

export default App;
