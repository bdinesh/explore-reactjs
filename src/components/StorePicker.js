import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  txtStoreName = React.createRef();
  gotoStore = event => {
    event.preventDefault();
    const storeName = this.txtStoreName.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          placeholder="Store name"
          defaultValue={getFunName()}
          ref={this.txtStoreName}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}
