import React from "react";
import Consultas from "../../../service/users/DateLocalization.Service";

class ViewCountrys extends React.Component {
  state = {
    countrys: [],
  };

  async componentDidMount() {
    this.getCountrys();
  }

  getCountrys = () => {
    Consultas.getAllCountry()
      .then((response) => {
        this.setState({
          countrys: response.data["countrys"],
        });
        console.log(response.data["countrys"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="column is-7 ml-2">
            <div className="table-container">
              <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Pais</th>
                    <th>Codigo</th>
                    <th>Bandera</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.countrys.map((country, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{country.country}</td>
                      <td>{country.code}</td>
                      <td>{country.flags}</td>
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

export default ViewCountrys;
