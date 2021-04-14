import React from "react";
import ViewCountrys from "../Components/Location/DataCountry/ViewCountrys.Component";
import ViewDepartments from "../Components/Location/DataDepartment/ViewDepartments.Component";
import ViewCities from "../Components/Location/DataCity/ViewCities.Component";
import ViewCode from "../Components/Location/DataCodePost/ViewCode.Component";

class OrdersScreen extends React.Component {
  render() {
    return (
      <div className="container-fluid mx-5">
        <div className="columns ">
          <div className="column is-full has-text-centered">
            <h2 className="is-size-1">Pais</h2>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-3 mr-2">
            <form className="box">
              <div class="field">
                <label class="label">Pais</label>
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
          <ViewCountrys />
        </div>
        <br />
        <hr /> 
        <br />
        <div className="columns is-mobile ">
          <div className="column is-6">
            <h2 className="is-size-2">Departamento</h2>
          </div>
          <div className="column is-6 is-centered has-text-left">
            <h2 className="is-size-2">Ciudad</h2>
          </div>
        </div>
        <div className="columns">
          <ViewDepartments />
          <div className="column is-3">
            <form className="box">
              <div class="field">
                <label class="label">Tipo de Estado</label>
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
          <ViewCities />
          <div className="column is-3">
            <form className="box">
              <div class="field">
                <label class="label">Tipo de Estado</label>
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
        <br />
        <hr /> 
        <br />
        <div className="columns is-mobile ">
          <div className="column is-full is-centered has-text-centered">
            <h2 className="is-size-2">Codigos Postal</h2>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-3 ml-2">
            <form className="box">
              <div class="field">
                <label class="label">Codigo</label>
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
          <ViewCode/>
        </div>
      </div>
    );
  }
}

export default OrdersScreen;
