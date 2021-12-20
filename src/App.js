import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import SimpleCart from "./components/SimpleCart/SimpleCart";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <Footer />
    </>
  );
}

export default App;
