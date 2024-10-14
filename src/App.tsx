import TodoPage from "./pages/TodoPage";
import TodoWithRtkPage from "./pages/TodoWithRtkPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoWithRtkPage />} />
          <Route path="/todo-with-redux-toolkit" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;