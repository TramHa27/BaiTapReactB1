import React, { Component } from 'react';
import HeaderComponent from "./HeaderComponent";
import NavComponent from "./NavComponent";
import ItemComponent from "./ItemComponent";
import FooterComponent from "./FooterComponent";

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent></HeaderComponent>
                <NavComponent></NavComponent>
                <ItemComponent></ItemComponent>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

