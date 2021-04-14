import React from "react";
import Consultas from "../../../service/users/DateUser.Service";

class ViewLocalizations extends React.Component {
  state = {
    localizations: [],
  };

  async componentDidMount() {
    this.getLocalizations();
  }

  getLocalizations = () => {
    Consultas.getAllLocations()
      .then((response) => {
        this.setState({
          localizations: response.data["localizations"],
        });
        console.log(response.data["localizations"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="columns">
        <div className="column is-full m-5">
          <div className="table-container">
            <table class="table is-bordered is-striped is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Pais</th>
                  <th>Departamento</th>
                  <th>Ciudad</th>
                  <th>Direccion</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {this.state.localizations.map((localization, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{localization.name_user}</td>
                      <td>{localization.lastname_user}</td>
                      <td>{localization.email_user}</td>
                      <td>{localization.country}</td>
                      <td>{localization.department}</td>
                      <td>{localization.city}</td>
                      <td>{localization.address}</td>
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
      </div>
    );
  }
}

export default ViewLocalizations;
