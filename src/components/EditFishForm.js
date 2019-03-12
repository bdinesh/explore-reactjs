import React from 'react';

class EditFishForm extends React.Component {
  onEditFish = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.onEditFish}
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.onEditFish}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.onEditFish}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.onEditFish}
        />
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.onEditFish}
        />
      </div>
    );
  }
}

export default EditFishForm;
