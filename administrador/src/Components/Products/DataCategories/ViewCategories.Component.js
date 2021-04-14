import React from "react";
import Consultas from "../../../service/products/DateProducts.Service";

class ViewCategories extends React.Component {
  state = {
    categorys: [],
  };

  async componentDidMount() {
    this.getCategory();
  }

  getCategory = () => {
    Consultas.getAllCategories()
      .then((response) => {
        this.setState({
          categorys: response.data["categorys"],
        });
        console.log(response.data["categorys"]);
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
                <th>categorias</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.categorys.map((category, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{category.categories}</td>
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

export default ViewCategories;
