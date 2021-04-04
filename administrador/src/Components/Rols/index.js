import React from "react";
import axios from "axios";

const url = "http://localhost:8080/api/getRol";

class Rols extends React.Component {
  state = {
    rols: [],
  };

  async componentDidMount() {
    this.getRols();
  }

  getRols = () => {
    axios.get(url).then((response) => {
      console.log(response.data["rols"]);
      this.setState({ rols: response.data["rols"] });
    });
  };

  render() {
    return (
      <div class="container is-fluid">
        <br class="mb-5" />
        <div className="columns">
          <div className="column">
            <section class="section">
              <h1 class="title">Roles</h1>
            </section>
          </div>
        </div>

        <br class="mb-5" />
        <div class="table-container is-fluid m-5">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>roles</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rols.map((rols) => {
                return (
                  <tr>
                    <th></th>
                    <td>{rols.roles}</td>
                    <td>
                      <a class="button is-warning">Editar</a> ||{" "}
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

export default Rols;
