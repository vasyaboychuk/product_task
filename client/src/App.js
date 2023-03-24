import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Products from "./component/Products/Products";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/products'}/>}/>
            <Route path={'/products'} element={<Products/>}/>
            <Route path={'/products/:id'} element={<SingleProduct/>}/>
          </Route>
          <Route path={'*'} element={<NotFound/>}/>

        </Routes>
      </div>
  );
}

export default App;
