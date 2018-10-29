import React from 'react';

export default class Main extends React.Component {
  componentDidMount() {
    fetch('/test')
    .then((res) => res.text())
    .then(data => console.log(data));
  }

  render() {
    return (
      <h1>HOLA AMIGO MAS</h1>
    );
  }
}