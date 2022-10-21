import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

function PublicRouts(props) {
    return (
        <Route {...rest}render ={
            props => (
                IsLogin() && restricted ?
                <Redirect to={"/"} /> :
                <Component {...props} />
            )
        }
           
         />
    );
}

export default PublicRouts;