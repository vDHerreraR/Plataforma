import React from "react";
import Consultas from "../../service/users/DateUser.Service";

class ViewRols extends React.Component {
  state = {
    rols: [],
  };

  async componentDidMount() {
    this.getRols();
  }

  getRols = () => {
    Consultas.getAllRols()
      .then((response) => {
        this.setState({
          rols: response.data["rols"],
        });
        console.log(response.data["rols"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="column is-5 mr-2">
        <div className="table-container">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>#</th>
                <th>roles</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rols.map((rol, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{rol.roles}</td>
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

export default ViewRols;
