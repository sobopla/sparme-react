import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  _handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <div className="React__checkbox">
        <label>
          <input
            type="checkbox"
            className="React__checkbox--input"
            checked={checked}
            onChange={this._handleChange}
          />
          <span className="React__checkbox--span" />
        </label>
      </div>
    );
  }
}

export default Checkbox;
