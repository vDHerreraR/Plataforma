import React from "react";
import Consultas from "../../../service/users/DateLocalization.Service";

class ViewCode extends React.Component {
  state = {
    postal_codes: [],
  };

  async componentDidMount() {
    this.getCode();
  }

  getCode = () => {
    Consultas.getAllPostalCode()
      .then((response) => {
        this.setState({
          postal_codes: response.data["postal_codes"],
        });
        console.log(response.data["postal_codes"]);
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
                <th>Codigo Postal</th>
                <th>Bandera</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.postal_codes.map((code, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{code.code}</td>
                    <td>{code.flags}</td>
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

export default ViewCode;
