import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import ProductDetailsModal from "../productDetailsModal/ProductDetailsModal";
import { getProductDetail, getProducts } from "./../api/userAPI";
import { deleteCategory, getCategories } from "./../api/adminAPI";
import { isAuthenticated } from "../api/authAPI";
import {
  HomeWrapper,
  ProductContainer,
  CategoryLinks,
  HomeContainer,
  CategoryLinksCard,
  CategoryLinksItems,
  CategoryLinksHeader,
  CategoryLinkContainer,
} from "./home.styles";
import { showUpdateCategoryForm } from "../redux/slices/formToggleSlice";
import UpdateCategory from "./../user/updateCategory/UpdateCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProduct from "../user/updateProduct/UpdateProduct";

const Home = () => {
  const [data, setData] = useState({
    products: [],
    categories: [],
  });
  const [productDetails, setProductDetails] = useState({
    show: false,
    product: {},
  });
  const [categoryId, setCategoryId] = useState("");
  const [productId, setProductId] = useState("");

  const dispatch = useDispatch();

  const { signin, updateCategory, updateProduct } = useSelector(
    (state) => state.formToggleSlice
  );

  const { user, token } = isAuthenticated();

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
  }, [signin, updateCategory, updateProduct]);

  const getProductDetails = async (id) => {
    try {
      const response = await getProductDetail(id);
      setProductDetails({ show: true, product: response });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const sortProductsByCategory = async (category) => {
    try {
      console.log(category);
      const productArray = await getProducts();
      const sortedProducts =
        category !== "all"
          ? productArray.filter((product) => product.category.name === category)
          : productArray;
      setData({ ...data, products: sortedProducts });
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategoryForm = (id) => {
    setCategoryId(id);
    dispatch(showUpdateCategoryForm(true));
  };

  const removeCategory = async (id, token, categoryId) => {
    try {
      const response = await deleteCategory(id, token, categoryId);
      if (response.err) {
        toast.error(response.err, { autoClose: 2000 });
      } else {
        await initialize();
        toast.success("Category deleted successfully", { autoClose: 2000 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeWrapper>
      {updateCategory && (
        <UpdateCategory categoryId={categoryId} toast={toast} />
      )}
      {updateProduct && <UpdateProduct productId={productId} toast={toast} />}
      <HomeContainer>
        <CategoryLinks>
          <CategoryLinksCard>
            <CategoryLinksHeader>Categories</CategoryLinksHeader>
            <CategoryLinksItems onClick={() => sortProductsByCategory("all")}>
              All
            </CategoryLinksItems>
            {categories
              ? categories.map((category) => (
                  <CategoryLinkContainer key={category._id}>
                    <CategoryLinksItems
                      onClick={() => sortProductsByCategory(category.name)}
                    >
                      {category.name}
                    </CategoryLinksItems>
                    {user && user.role === 1 && (
                      <button onClick={() => updateCategoryForm(category._id)}>
                        Update
                      </button>
                    )}
                    {user && user.role === 1 && (
                      <button
                        onClick={() =>
                          removeCategory(user.id, token, category._id)
                        }
                      >
                        Delete
                      </button>
                    )}
                  </CategoryLinkContainer>
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
                  setProductId={setProductId}
                />
              ))
            : null}
        </ProductContainer>
        <ToastContainer autoClose={2000} />
      </HomeContainer>
      {productDetails.show && (
        <ProductDetailsModal
          product={product}
          productDetails={productDetails}
          setProductDetails={setProductDetails}
        />
      )}
    </HomeWrapper>
  );
};

export default Home;
