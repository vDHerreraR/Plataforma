import React from "react";
import ViewUser from "../Components/DataUsers/ViewUser.Component"
import ViewRols from "../Components/DataRols/ViewRols.Component"

const UserScreen = () => {
    return (
      <div className="container">
        <div className="columns ">
          <div className="column is-full has-text-centered">
            <h1 className="is-size-1">Bienvenido a la sesion del usuario</h1>
          </div>
        </div>
        <hr />
        <div className="columns is-centered is-vcentered">
          <div className="column is-5 has-text-left mt-*">
            <h2 className="is-size-2">tus usuarios</h2>
          </div>
          <div className="column is-2">
            <section class="section">
              <button className="button is-warning">
                Agregar Usuario
              </button>
            </section>
          </div>
        </div>
        <ViewUser />
        <br />
        <hr /> 
        <br />
        <div className="columns is-mobile ">
          <div className="column is-full is-centered has-text-centered">
            <h2 className="is-size-2">Roles</h2>
          </div>
        </div>
        <div className="columns is-centered">
          <ViewRols />
          <div className="column is-3 ml-2">
            <form className="box">
              <div class="field">
                <label class="label">Tipo de Rol</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Ingresar Valor" />
                </div>
              </div>
                <br />
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-warning">Agregar</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Cancel</button>
                </div>
              </div> 
            </form>
            <br class="my-5" />
          </div>
        </div>
        <div className="columns ">
          <div className="column is-full has-text-centered">
            <h2 className="is-size-1">Ubicacion de los usuarios</h2>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-full m-5">
            <div className="table-container">
              <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>roles</th>
                    <th>Estado</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="columns ">
          <div className="column is-full has-text-centered">
            <h2 className="is-size-1">Contactar a los usuarios</h2>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-full m-5">
            <div className="table-container">
              <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>roles</th>
                    <th>Estado</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UserScreen;