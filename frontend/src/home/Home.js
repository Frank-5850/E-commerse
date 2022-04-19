import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";
import ProductCard from "../productCard/ProductCard";
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
import {
  ProductDetailWrapper,
  ProductDetailContainer,
  ProductDetailImg,
  ProductDetailGroup,
  ProductDetailSection,
} from "./productDetailCard.styles";
import {
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "../productCard/productCard.styles";
import { CloseButton } from "../user/signin/forms.styles";

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

  const productDetailCard = () => (
    <ProductDetailWrapper
      show={productDetails.show}
      onClick={() => setProductDetails({ ...productDetails, show: false })}
    >
      <ProductDetailContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton
          onClick={() => setProductDetails({ ...productDetails, show: false })}
        >
          X
        </CloseButton>
        <ProductDetailImg
          src={`http://localhost:8000/${product?.photo?.filePath}`}
          alt={product.name}
        />
        <ProductDetailSection>
          <ProductDetailGroup>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductDetailGroup>
          <ProductDetailGroup>
            Qty:
            <input type="number" />
            <button>Add to Cart</button>
          </ProductDetailGroup>
        </ProductDetailSection>
      </ProductDetailContainer>
    </ProductDetailWrapper>
  );

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
          {productDetailCard()}
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
      {signin && <Signin />}
      {signup && <Signup />}
    </HomeWrapper>
  );
};

export default Home;
