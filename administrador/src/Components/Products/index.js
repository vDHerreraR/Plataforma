import React from 'react';
import axios from 'axios'

const url = "http://localhost:8080/api/getProduct";
class  Products extends React.Component{
    state = {
        isModal: false,
        data: []
    };

    async componentDidMount(){
        this.fetchExercise();
    }

    fetchExercise = () => {
        axios.get(url).then(response =>{
            console.log(response.data['products'])
            this.setState({data: response.data['products']})
        })
    }

    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };


    render(){
        const active = this.state.isModal ? "is-active" : "";
        return (
            <div class="container is-fluid">
                <br class="mb-5" />
                <div className="columns">
                    <div className="column">
                        <section class="section">
                            <h1 class="title">Productos</h1>
                        </section>
                    </div>
                    <div className="column">
                        <section class="section">
                            <button onClick={this.handleClick} className="button is-primary">
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
                                    <textarea className="input" placeholder="Ingresa su descripcion" maxLength="12">

                                    </textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Precio</label>
                                    <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="$0.0"
                                    />
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
                
                <br class="mb-5" />
                <div class="table-container is-fluid m-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map(products => {
                                    return(
                                        <tr>
                                            <th></th>
                                            <td>{products.product}</td>
                                            <td>{products.price_product}</td>
                                            <td>{products.stock_product}</td>
                                            <td><a class="button is-warning">Editar</a> || <a class="button is-danger">Eliminar</a></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
}

export default Products;