import React from 'react';
import PropTypes from 'prop-types';

class RatingSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      text: '',
      finalData: JSON.parse(localStorage.getItem(props.id)),
    };
  }

  saveToDataBase = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveButton = (event) => {
    event.preventDefault();
    const { id } = this.props;
    const { email, rate, text } = this.state;
    const data = JSON.parse(localStorage.getItem(id)) || [];
    const saveData = {
      emailFinal: email,
      notaFinal: rate,
      textoFinal: text,
    };
    data.push(saveData);
    localStorage.setItem(id, JSON.stringify(data));
    this.setState({ finalData: data });
  }

  render() {
    const { email, finalData } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="product-detail-email"
              placeholder="Email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.saveToDataBase }
            />
          </label>
          <label htmlFor="textAreaRate">
            Mensagem opcional:
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              name="text"
              onChange={ this.saveToDataBase }
            />
          </label>
          <label htmlFor="starsButtons">
            Nota:
            <label htmlFor="1-star-rating">
              1
              <input
                type="radio"
                id="1-star-rating"
                data-testid="1-rating"
                value="1"
                name="stars"
                onChange={ this.saveToDataBase }
              />
            </label>
            <label htmlFor="2-star-rating">
              2
              <input
                type="radio"
                id="2-star-rating"
                data-testid="2-rating"
                value="2"
                name="stars"
                onChange={ this.saveToDataBase }
              />
            </label>
            <label htmlFor="3-star-rating">
              3
              <input
                type="radio"
                id="3-star-rating"
                data-testid="3-rating"
                value="3"
                name="stars"
                onChange={ this.saveToDataBase }
              />
            </label>
            <label htmlFor="4-star-rating">
              4
              <input
                type="radio"
                data-testid="4-rating"
                value="4"
                id="4-star-rating"
                name="stars"
                onChange={ this.saveToDataBase }
              />
            </label>
            <label htmlFor="5-star-rating">
              5
              <input
                type="radio"
                data-testid="5-rating"
                value="5"
                name="stars"
                onChange={ this.saveToDataBase }
              />
            </label>
          </label>
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ (event) => this.saveButton(event) }
            name="submit-review"
          >
            Enviar
          </button>
        </form>
        {
          finalData !== null ? (finalData.map((avaliacao) => (
            <div key={ avaliacao }>
              <span>
                { avaliacao.emailFinal }
              </span>
              <span>
                { avaliacao.textoFinal }
              </span>
              <span>
                { avaliacao.notaFinal }
              </span>
            </div>
          ))
          ) : ''
        }
      </section>

    );
  }
}

RatingSystem.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default RatingSystem;
