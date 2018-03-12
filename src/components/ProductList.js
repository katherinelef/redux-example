import React, { Component } from 'react';
import store from '../store';
import {addToCart} from '../actionCreators';

const styles = {
  products: {
    width: '350px'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      ]
    }
  }

  render() {
    return (
      <div className="card-group">
      
      {this.state.products.map(product =>
          <div  key={product.id}>
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">
                <a className="btn btn-primary" onClick={() => this.addToCart(product)}  disabled={product.inventory <= 0}>${product.price} </a>
              </p>
            </div>
          </div>
        )}
  

</div>


    );
  }

  addToCart(product) {
    store.dispatch ( addToCart(product))

  }
}

export default ProductList;
