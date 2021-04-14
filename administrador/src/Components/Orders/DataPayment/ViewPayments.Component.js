import React from "react";
import Consultas from "../../../service/checkout/DateCheckout.Service";

class ViewPayments extends React.Component {
  state = {
    payment_methods: [],
  };

  async componentDidMount() {
    this.getPayments();
  }

  getPayments = () => {
    Consultas.getAllMethods()
      .then((response) => {
        this.setState({
          payment_methods: response.data["payment_methods"],
        });
        console.log(response.data["payment_methods"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="column is-7 mr-2">
        <div className="table-container">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>#</th>
                <th>Tipos</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.payment_methods.map((payment, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{payment.type}</td>
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

export default ViewPayments;
