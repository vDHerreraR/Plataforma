import React from "react";
import Consultas from "../../../service/users/DateUser.Service";

class ViewContacts extends React.Component {
  state = {
    contacts: [],
  };

  async componentDidMount() {
    this.getContacts();
  }

  getContacts = () => {
    Consultas.getAllContacts()
      .then((response) => {
        this.setState({
          contacts: response.data["contacts"],
        });
        console.log(response.data["contacts"]);
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
                  <th>Tipo</th>
                  <th>Numero</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map((contact, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{contact.name_user}</td>
                      <td>{contact.lastname_user}</td>
                      <td>{contact.email_user}</td>
                      <td>{contact.type}</td>
                      <td>{contact.number}</td>
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

export default ViewContacts;
