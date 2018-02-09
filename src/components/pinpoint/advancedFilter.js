import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { extColor, engine, transmission, drive, intColor, trimLevel } from '../../data/advSearchData'


const extColors = []
extColor.map(({ name }) => {
  extColors.push(name)
})

class advancedFilter extends Component {
  state = {
      values: [],
    };

    handleChange = (event, index, values) => this.setState({values});

    menuItems(values) {
      return extColors.map((name) => (
        <MenuItem
          key={name}
          insetChildren={true}
          checked={values && values.indexOf(name) > -1}
          value={name}
          primaryText={name}
        />
      ));
    }

    render() {
      const {values} = this.state;
      return (
        <SelectField
          multiple={true}
          hintText="Select a color"
          value={values}
          onChange={this.handleChange}
        >
          {this.menuItems(values)}
        </SelectField>
      );
    }
}

export default advancedFilter
