import React, { Component } from "react";

export default class NavComponent extends Component {
  render() {
    return (
  <header classname="py-5">
  <div classname="container px-lg-5">
    <div classname="p-4 p-lg-5 bg-light rounded-3 text-center">
      <div classname="m-4 m-lg-5">
        <h1 classname="display-5 fw-bold">A warm welcome!</h1>
        <p classname="fs-4">
          Bootstrap utility classes are used to create this jumbotron
          since the old component has been removed from the framework. Why
          create custom CSS when you can use utilities?
        </p>
        <a classname="btn btn-primary btn-lg" href="#!">
          Call to action
        </a>
      </div>
    </div>
  </div>
</header>


    );
  }
}
