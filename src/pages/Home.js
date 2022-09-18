import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import CategoriesList from '../components/CategoriesList';
import SearchInput from '../components/SearchInput';
import Products from '../components/Products';

export default class Home extends Component {
  render() {
    const {
      searchInput,
      onSearchInputChange,
      searchResult,
      onSearchInputClick,
      categories,
      onCategoryClick,
      onAddToCartButtonClick,
      numberOfProducts,
      howManyOfThisProduct,
    } = this.props;
    return (
      <>
        <CartButton />
        <span data-testid="shopping-cart-size">{numberOfProducts}</span>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <SearchInput
          searchInput={ searchInput }
          onSearchInputChange={ onSearchInputChange }
          onSearchInputClick={ onSearchInputClick }
        />
        <CategoriesList
          categories={ categories }
          onCategoryClick={ onCategoryClick }
        />
        <Products
          searchResult={ searchResult }
          onAddToCartButtonClick={ onAddToCartButtonClick }
          howManyOfThisProduct={ howManyOfThisProduct }
        />
      </>
    );
  }
}

Home.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSearchInputClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  onAddToCartButtonClick: PropTypes.func.isRequired,
  numberOfProducts: PropTypes.number.isRequired,
  howManyOfThisProduct: PropTypes.func.isRequired,
};
