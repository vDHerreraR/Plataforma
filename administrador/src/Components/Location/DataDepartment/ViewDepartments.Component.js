import React from "react";
import Consultas from "../../../service/users/DateLocalization.Service";

class ViewDepartments extends React.Component {
  state = {
    departments: [],
  };

  async componentDidMount() {
    this.getdepartments();
  }

  getdepartments = () => {
    Consultas.getAllDepartment()
      .then((response) => {
        this.setState({
          departments: response.data["departments"],
        });
        console.log(response.data["departments"]);
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
                <th>Depart</th>
                <th>Pais</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departments.map((department, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{department.department}</td>
                    <td>{department.country}</td>
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

export default ViewDepartments;
