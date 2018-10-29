import React from 'react';
import { getDataSuccess } from '../actions/actionCreators';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/ebay')
    .then((res) => {
      return res.json();
    })
    .then(data => {
      this.props.dispatch(getDataSuccess(data))
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>HOLA AMIGO MAS</h1>
        <ul>
          {
            data.map(item => {
              return <li>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}