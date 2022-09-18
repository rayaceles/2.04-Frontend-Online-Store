// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      adress: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullName, cpf, email, phone, cep, adress } = this.state;
    return (
      <div>
        <h2>Revise seus produtos</h2>
        <ul>
          <li>
            Produto 1
            {' '}
            <span>R$ XXX,XX</span>
            {' '}
          </li>
          <li>
            Produto 2
            {' '}
            <span>R$ XXX,XX</span>
            {' '}
          </li>
        </ul>
        <p>
          Total:
          {' '}
          <span>R$ XXX,XX</span>
        </p>
        <div>
          <form>
            <label htmlFor="fullName">
              Nome Completo:
              <input
                data-testid="checkout-fullname"
                placeholder="Nome completo"
                name="fullName"
                value={ fullName }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input
                data-testid="checkout-cpf"
                placeholder="CPF"
                name="cpf"
                value={ cpf }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                data-testid="checkout-email"
                placeholder="e-mail"
                name="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="phone">
              Telefone:
              <input
                data-testid="checkout-phone"
                placeholder="Telefone"
                name="phone"
                value={ phone }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="cep">
              CEP:
              <input
                data-testid="checkout-cep"
                placeholder="CEP"
                name="cep"
                value={ cep }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="adress">
              Endereço:
              <input
                data-testid="checkout-address"
                placeholder="Endereço"
                name="adress"
                value={ adress }
                onChange={ this.handleChange }
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}
// Cart.propTypes = {
//   cartItems: PropTypes.string.isRequired,
// }.isRequired;
