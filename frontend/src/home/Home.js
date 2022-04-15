import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";
import { getProducts } from "./../api/userAPI";
import { getCategories } from "./../api/adminAPI";
import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductDescription,
  ProductPrice,
} from "./productCard.styles";
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

  useEffect(() => {
    initialize();
  }, []);

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
                <ProductCard key={product._id}>
                  <ProductImage
                    src={`http://localhost:8000/${product.photo.filePath}`}
                    alt={product.name}
                  />
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductPrice>${product.price}</ProductPrice>
                </ProductCard>
              ))
            : null}
        </ProductContainer>
      </HomeContainer>
      {signin && <Signin />}
      {signup && <Signup />}
    </HomeWrapper>
  );
};

export default Home;
