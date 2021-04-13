import React from "react";

class ProductsScreen extends React.Component {
  state = {
    isModal: false,
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    const active = this.state.isModal ? "is-active" : "";
    return (
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="column is-8 has-text-centered">
            <h1 className="is-size-1">Productos</h1>
          </div>
          <div className="column is-2">
            <section class="section">
              <button onClick={this.handleClick} className="button is-warning">
                Agregar Producto
              </button>
            </section>

            <div className={`modal ${active}`}>
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Nuevo Producto</p>
                  <button
                    onClick={this.handleClick}
                    className="delete"
                    aria-label="close"
                  />
                </header>
                <section className="modal-card-body">
                  <div className="field">
                    <label className="label">Nombre del producto</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ingresa su producto"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Descripcion</label>
                    <div className="control">
                      <textarea
                        className="input"
                        placeholder="Ingresa su descripcion"
                        maxLength="12"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Precio</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="$0.0" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Stock</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ingresa su stock"
                      />
                    </div>
                  </div>
                </section>
                <footer className="modal-card-foot">
                  <button className="button is-success">Agregar</button>
                  <button onClick={this.handleClick} className="button">
                    Cancelar
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="columns is-centered is-vcentered">
          <div className="column is-7">
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
        <div className="columns is-mobile ">
          <div className="column is-full is-centered has-text-centered">
            <h2 className="is-size-2">Categorias</h2>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-7 mr-2">
            <div className="table-container">
              <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tipo de Categoria</th>
                    <th>Estado</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="column is-3 ml-2">
            <form className="box">
              <div class="field">
                <label class="label">Tipo de Categoria</label>
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
      </div>
    );
  }
}

export default ProductsScreen;
