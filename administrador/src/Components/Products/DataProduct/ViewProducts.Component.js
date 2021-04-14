import React from "react";
import Consultas from "../../../service/products/DateProducts.Service";

class ViewProduct extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    Consultas.getAllProducts()
      .then((response) => {
        this.setState({
          products: response.data["products"],
        });
        console.log(response.data["products"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="column is-10">
        <div className="table-container">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>#</th>
                <th>productos</th>
                <th>categorias</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.product}</td>
                    <td>{product.categories}</td>
                    <td>{product.stock_product}</td>
                    <td>{product.price_product}</td>
                    <td>
                      <a class="button is-warning">Editar</a> ||
                      <a class="button is-danger">Eliminar</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewProduct;
