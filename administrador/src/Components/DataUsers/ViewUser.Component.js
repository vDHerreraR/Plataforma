import React from 'react'
import Consultas from '../../service/users/DateUser.Service'

export default class ViewUser extends React.Component {
    state = {
        users: [],
    };

    async componentDidMount() {
        this.getUsers();
    }
    
    getUsers = () => {
        Consultas.getAllUsers()
        .then((response) => {
            this.setState({
                users: response.data["users"]
            });
            console.log(response.data["users"]);
          })
          .catch(e => {
            console.log(e);
          });
    }
    

    render() {
        return (
            <div className="columns is-centered is-vcentered">
                <div className="column is-9">
                    <div className="table-container">
                    <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user, index) => {
                                    return (
                                        <tr>
                                            <th>{index+1}</th>
                                            <td>{user.name_user}</td>
                                            <td>{user.lastname_user}</td>
                                            <td>{user.email_user}</td>
                                            <td>{user.roles}</td>
                                            <td>
                                            <a class="button is-warning">Editar</a> ||
                                            <a class="button is-danger">Eliminar</a>
                                            </td>
                                        </tr>
                                    );
                                })

                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )

    }
}