import axios from 'axios';

import {requestResultLogin} from '../guest/Login'
import {requestResultRegistration} from '../guest/Registration'

export const axiosRequestPOST = (request) => {
    axios.post(request.url, request.data)
    .then(function(response){
        postResponse(request.requestor, response)
    })
    .catch(function(error){
      console.log(error);
    });
}

const postResponse = (requestor, response) => {
    switch(requestor){
        case 'Login Request': //requestor
            requestResultLogin(response) //method name
        break;

        case 'Registration Request':
            requestResultRegistration(response) //method name
        break;

        default:

    }
}

export const axiosRequestGET = (request) => {
    axios.get(request.url)
    .then(function(response){
        getResponse(request.requestor, response)
    })
    .catch(function(error){
      console.log(error);
    });
}

const getResponse = (requestor, response) => {
    switch(requestor){
        case '': //requestor
            //method name
        break;

        default:

    }
}
