import React from "react";
import { Provider } from 'react-redux';
import Header from "./components/Header/Header";
import HomePage from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
