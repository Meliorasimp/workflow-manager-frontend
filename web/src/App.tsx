import "./styles/index.css";
import router from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" />
      </Provider>
    </>
  );
}

export default App;
