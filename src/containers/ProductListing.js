import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  //const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
