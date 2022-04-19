import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";
import ProductCard from "../productCard/ProductCard";
import ProductDetailsModal from "../productDetailsModal/ProductDetailsModal";
import { getProductDetail, getProducts } from "./../api/userAPI";
import { getCategories } from "./../api/adminAPI";
import {
  HomeWrapper,
  ProductContainer,
  CategoryLinks,
  HomeContainer,
  CategoryLinksCard,
  CategoryLinksItems,
  CategoryLinksHeader,
} from "./home.styles";

const Home = () => {
  const [data, setData] = useState({
    products: [],
    categories: [],
  });
  const [productDetails, setProductDetails] = useState({
    show: false,
    product: {},
  });

  const { signin, signup } = useSelector((state) => state.formToggleSlice);

  const initialize = async () => {
    try {
      const productData = await getProducts();
      const categoryData = await getCategories();
      setData({ products: productData, categories: categoryData });
    } catch (error) {
      console.log(error);
    }
  };

  const { products, categories } = data;
  const { product } = productDetails;

  useEffect(() => {
    initialize();
  }, []);

  const getProductDetails = async (id) => {
    try {
      const response = await getProductDetail(id);
      setProductDetails({ show: true, product: response });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <CategoryLinks>
          <CategoryLinksCard>
            <CategoryLinksHeader>Categories</CategoryLinksHeader>
            {categories
              ? categories.map((category) => (
                  <CategoryLinksItems key={category._id}>
                    {category.name}
                  </CategoryLinksItems>
                ))
              : null}
          </CategoryLinksCard>
        </CategoryLinks>
        <ProductContainer>
          {products
            ? products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  getProductDetails={getProductDetails}
                />
              ))
            : null}
        </ProductContainer>
      </HomeContainer>
      {productDetails.show && (
        <ProductDetailsModal
          product={product}
          productDetails={productDetails}
          setProductDetails={setProductDetails}
        />
      )}
      {signin && <Signin />}
      {signup && <Signup />}
    </HomeWrapper>
  );
};

export default Home;
