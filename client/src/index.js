import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({uri:'https://earthmed-hasura.herokuapp.com/v1/graphql'});

ReactDOM.render(
<ApolloClient client={client}>
    <App />
</ApolloClient>, 
document.getElementById('root'));