import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri:'https://earthmed-hasura.herokuapp.com/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'pQzhQq5C4Jhg6Mc0FPxc'
    }
});

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>, 
document.getElementById('root'));