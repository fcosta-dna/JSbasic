import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';

export default class Main extends Component{

    //state of component
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };
    //function for call a function when start component    
    componentDidMount(){
        this.loadProduct();
    };

    //function show products the db
    loadProduct = async (page = 1) => {
        const reponse = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = reponse.data;

        this.setState({products: docs, productInfo, page });
    };


    //function prevPag 
    prevPag = () => {
        const {page} = this.state;

        if(page === 1) return;

        const PageNumber = page -1;

        this.loadProduct(PageNumber);

    };

    //function nextPag
    nextPag = () => {
        const { page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const PageNumber = page + 1;
        
        this.loadProduct(PageNumber);

    }; 

    render(){
        const{products, productInfo, page} = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
                ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPag}>Anterior</button>
                    <p>Page:{productInfo.page} de {productInfo.pages}</p>
                <button disabled={page === productInfo.pages} onClick={this.nextPag}>Próxima</button>
            </div>

            </div>
        );
    };
}
