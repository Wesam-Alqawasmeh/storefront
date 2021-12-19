import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
