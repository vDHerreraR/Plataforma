import React from "react";
import Consultas from "../../../service/checkout/DateCheckout.Service";

class ViewCheckOut extends React.Component {
  state = {
    checkouts: [],
  };

  async componentDidMount() {
    this.getCheckOut();
  }

  getCheckOut = () => {
    Consultas.getAllCheckOut()
      .then((response) => {
        this.setState({
          checkouts: response.data["checkouts"],
        });
        console.log(response.data["checkouts"]);
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
                <th>total</th>
                <th>nombres</th>
                <th>Estado de la orden</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.checkouts.map((order, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.product}</td>
                    <td>{order.categories_product}</td>
                    <td>{order.total}</td>
                    <td>{order.name_user} {order.lastname_user}</td>
                    <td>{order.state}</td>
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

export default ViewCheckOut;
