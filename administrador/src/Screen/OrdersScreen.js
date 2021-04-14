import React from "react";
import ViewPayments from "../Components/Orders/DataPayment/ViewPayments.Component";
import ViewStateCheckOut from "../Components/Orders/DataStateCheckOut/ViewState.Component";
import ViewCheckOut from "../Components/Orders/DataCheckOut/ViewCheckOut.Component";

class OrdersScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns ">
          <div className="column is-full has-text-centered">
            <h1 className="is-size-1">Pedidos</h1>
          </div>
        </div>
        <hr />
        <div className="columns is-centered is-vcentered">
          <ViewCheckOut />
        </div>
        <br />
        <hr /> 
        <br />
        <div className="columns is-mobile ">
          <div className="column is-full is-centered has-text-centered">
            <h2 className="is-size-2">Estados</h2>
          </div>
        </div>
        <div className="columns is-centered">
          <ViewStateCheckOut />
          <div className="column is-3 ml-2">
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
            <h2 className="is-size-2">Metodos de pagos</h2>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-3 ml-2">
            <form className="box">
              <div class="field">
                <label class="label">Metodo de pagos</label>
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
          <ViewPayments />
        </div>
      </div>
    );
  }
}

export default OrdersScreen;
