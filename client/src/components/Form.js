import React from 'react';
import { getData } from '../actions/actionCreators';


export default class Form extends React.Component {
  state = {
    fields: {
      item: ''
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(getData(this.state.fields.item));
  }

  handleChange = ({ target }) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [target.name]: target.value
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus 
          name="item" 
          type="text" 
          placeholder="What are you looking for?" 
          value={this.state.fields.item}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}