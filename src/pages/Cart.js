import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';
import HomeButton from '../components/HomeButton';

const Minus1 = -1;

export default class Cart extends Component {
  quantityOfProducts = (productID) => {
    const { cartItems } = this.props;
    const itemToAdd = cartItems.find((item) => item.product.id === productID);
    return itemToAdd.qtt;
  }

  finalizePurchase = () => {
    const { history } = this.props;
    history.push('/checkout');
  }

  render() {
    const { cartItems, changeProductQuantity, disabledAddmore } = this.props;
    return (
      <div>
        <HomeButton />
        <p>Produtos</p>
        {
          cartItems[0] === undefined
            ? <EmptyCart />
            : (
              <div>
                {
                  (cartItems
                    .map((currProduct) => {
                      const {
                        id,
                        title,
                        price,
                        thumbnail,
                      } = currProduct.product;
                      return (
                        <div key={ id }>
                          <Link
                            to={ `./productDetails/${id}` }
                          >
                            <p data-testid="shopping-cart-product-name">{title}</p>
                            <img src={ thumbnail } alt={ title } />
                            <p>{price}</p>
                          </Link>
                          <button
                            type="button"
                            data-testid="product-decrease-quantity"
                            onClick={ () => changeProductQuantity(id, Minus1) }
                          >
                            -
                          </button>
                          <div
                            data-testid="shopping-cart-product-quantity"
                          >
                            {currProduct.qtt}

                          </div>
                          <button
                            type="button"
                            data-testid="product-increase-quantity"
                            onClick={ () => changeProductQuantity(id, 1) }
                            disabled={ disabledAddmore(id) }
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={ () => changeProductQuantity(id, 'removeAll') }
                          >
                            X
                          </button>
                          {/* <p data-testid="shopping-cart-size">1</p> */}
                        </div>
                      );
                    }))
                }
                <button
                  type="button"
                  data-testid="checkout-products"
                  onClick={ this.finalizePurchase }
                >
                  Finalizar compra
                </button>
              </div>
            )
        }
      </div>
    );
  }
}
Cart.propTypes = {
  cartItems: PropTypes.string.isRequired,
}.isRequired;
