import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(appStore);
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },
  ]);

  // console.log(selector);
  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
          <WatchPage />
        </RouterProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

//
