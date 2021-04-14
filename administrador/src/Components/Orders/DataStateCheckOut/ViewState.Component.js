import React from "react";
import Consultas from "../../../service/checkout/DateCheckout.Service";

class ViewStateCheckOut extends React.Component {
  state = {
    state_checkouts: [],
  };

  async componentDidMount() {
    this.getStates();
  }

  getStates = () => {
    Consultas.getAllStateCheckOut()
      .then((response) => {
        this.setState({
          state_checkouts: response.data["state_checkouts"],
        });
        console.log(response.data["state_checkouts"]);
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
                    <th>icono</th>
                    <th>color</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
              {this.state.state_checkouts.map((state, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{state.state}</td>
                    <td>{state.icon}</td>
                    <td>{state.colors}</td>
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

export default ViewStateCheckOut;
