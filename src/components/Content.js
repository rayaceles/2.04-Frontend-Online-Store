import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import {
  getProductsFromCategoryAndQuery,
  getCategories,
  getProductsFromCategory,
} from '../services/api';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      searchInput: '',
      searchResult: [],
      categories: [],
      currentCategory: '',
      numberOfProducts: 0,
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState({ categories: result });
  }

  onAddToCartButtonClick = (cartProduct) => {
    const { cartItems, numberOfProducts } = this.state;
    const cartString = JSON.stringify(cartItems);
    let numberOfAllproducts = numberOfProducts;
    if (!cartString.includes(cartProduct.id)) {
      cartItems.push({ product: cartProduct, qtt: 1 });
      numberOfAllproducts += 1;
      this.setState({
        numberOfProducts: numberOfAllproducts,
      });
    } else if (cartString.includes(cartProduct.id)) {
      cartItems.find((item) => {
        const itemString = JSON.stringify(item);
        if (itemString.includes(cartProduct.id)) {
          item.qtt += 1;
          numberOfAllproducts += 1;
          this.setState({
            numberOfProducts: numberOfAllproducts,
          });
          console.log(item);
        }
        return null;
      });
    }
  }

  changeProductQuantity = (productID, quantity) => {
    const { numberOfProducts } = this.state;
    if (typeof quantity === 'number') {
      this.handleChangeOfProducts(productID, quantity);
      this.setState((previous) => {
        previous.numberOfProducts += quantity;
      });
      if (quantity === +1) {
        const newState = numberOfProducts + 1;
        this.setState({
          numberOfProducts: newState,
        });
      } else {
        const newState = numberOfProducts - 1;
        this.setState({
          numberOfProducts: newState,
        });
      }
    } else if (quantity === 'removeAll') {
      this.removeAll(productID);
    }
    this.forceUpdate();
  }

  handleChangeOfProducts = (productID, quantity) => {
    const { cartItems } = this.state;
    const item = cartItems.find((currItem) => currItem.product.id === productID);
    item.qtt += quantity;
    if (item.qtt === 0) {
      this.removeAll(productID);
    }
  }

  removeAll = (productID) => {
    const { cartItems } = this.state;
    const withoutProduct = cartItems.filter((item) => item.product.id !== productID);
    this.setState({
      cartItems: withoutProduct,
    });
  }

  onCategoryClick = ({ target }) => {
    this.setState({
      currentCategory: target.id,
      searchResult: [],
    });
    this.setState({
      currentCategory: target.id,
      searchResult: [],
    }, async () => {
      const searchFromCategory = await getProductsFromCategory(target.id);
      this.setState({
        searchResult: searchFromCategory.results,
      });
    });
  }

  onSearchInputClick = () => {
    const {
      searchInput,
      currentCategory,
    } = this.state;
    this.setState({
      searchResult: [],
    }, async () => {
      const searchWithCategory = await getProductsFromCategoryAndQuery(
        currentCategory,
        searchInput,
      );

      this.setState({ searchResult: searchWithCategory.results });
    });
  }

  onSearchInputChange = ({ target }) => {
    const {
      value,
    } = target;

    this.setState({ searchInput: value });
  }

  howManyOfThisProduct = (productID) => {
    const { cartItems } = this.state;
    const item = cartItems.find((currItem) => currItem.product.id === productID);

    if (!item) {
      return '';
    }
    if (item.qtt > 0) {
      return item.qtt;
    }
    return '';
  }

  disabledAddmore = (productID) => {
    const { cartItems } = this.state;
    const item = cartItems.find((currItem) => currItem.product.id === productID);
    return item.qtt >= item.product.available_quantity;
  }

  render() {
    const {
      cartItems,
      searchInput,
      searchResult,
      categories,
      numberOfProducts,
    } = this.state;
    return (

      <BrowserRouter>
        <Switch>
          <Route
            path="/Cart"
            render={ (props) => (
              <Cart
                { ...props }
                cartItems={ cartItems }
                changeProductQuantity={ this.changeProductQuantity }
                disabledAddmore={ this.disabledAddmore }
              />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                searchInput={ searchInput }
                onSearchInputChange={ this.onSearchInputChange }
                onSearchInputClick={ this.onSearchInputClick }
                searchResult={ searchResult }
                categories={ categories }
                onCategoryClick={ this.onCategoryClick }
                onAddToCartButtonClick={ this.onAddToCartButtonClick }
                numberOfProducts={ numberOfProducts }
                howManyOfThisProduct={ this.howManyOfThisProduct }
              />) }
          />
          <Route
            path="/productDetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              onAddToCartButtonClick={ this.onAddToCartButtonClick }
              numberOfProducts={ numberOfProducts }
            />) }
          />
          <Route
            path="/checkout"
            render={ (props) => (<Checkout
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
