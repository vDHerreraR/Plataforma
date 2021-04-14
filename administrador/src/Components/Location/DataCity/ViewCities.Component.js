import React from "react";
import Consultas from "../../../service/users/DateLocalization.Service";

class ViewCities extends React.Component {
  state = {
    citys: [],
  };

  async componentDidMount() {
    this.getcities();
  }

  getcities = () => {
    Consultas.getAllCitys()
      .then((response) => {
        this.setState({
          citys: response.data["citys"],
        });
        console.log(response.data["citys"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="column is-3">
        <div className="table-container">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>#</th>
                <th>Ciud</th>
                <th>Dpto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.citys.map((city, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{city.city}</td>
                    <td>{city.department}</td>
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

export default ViewCities;
