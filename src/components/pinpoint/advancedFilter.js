import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { extColor, engine, transmission as trans, drive as dr, intColor, trimLevel } from '../../data/advSearchData'

class advancedFilter extends Component {
  state = {
    colors: [],
    engines: [],
    transmission: [],
    drive: [],
    interior: [],
    trim: []
  };

handleChange = (event, index, values) => this.setState({values});

menuItems(values, data) {
  return data.map((value) => (
    <MenuItem
      key={value.name}
      insetChildren={true}
      checked={values && values.indexOf(value.name) > -1}
      value={value.name}
      primaryText={value.name}
    />
  ));
}

render() {
  const {colors, engines, transmission, drive, interior, trim} = this.state;
  return (
    <div className='advanced-filter-section'>
      <SelectField
        className='adv-filter-field'
        multiple={true}
        hintText="Color"
        value={colors}
        onChange={(event, index, colors) => this.setState({colors})}
      >
        {this.menuItems(colors, extColor)}
      </SelectField>
      <SelectField
        className='adv-filter-field'
        multiple={true}
        hintText="Engine"
        value={engines}
        onChange={(event, index, engines) => this.setState({engines})}
      >
        {this.menuItems(engines, engine)}
      </SelectField>
      <SelectField
        className='adv-filter-field'
        multiple={true}
        hintText="Transmission"
        value={transmission}
        onChange={(event, index, transmission) => this.setState({transmission})}
      >
        {this.menuItems(transmission, trans)}
      </SelectField>
      <SelectField
        className='adv-filter-field'
        multiple={true}
        hintText="Drive"
        value={drive}
        onChange={(event, index, drive) => this.setState({drive})}
      >
        {this.menuItems(drive, dr)}
      </SelectField>
      <SelectField
        className='adv-filter-field'
        multiple={true}
        hintText="Interior"
        value={interior}
        onChange={(event, index, interior) => this.setState({interior})}
      >
        {this.menuItems(interior, intColor)}
      </SelectField>
      <SelectField
        className='adv-filter-field'
        multiple={true}
        hintText="Trim Level"
        value={trim}
        onChange={(event, index, trim) => this.setState({trim})}
      >
        {this.menuItems(trim, trimLevel)}
      </SelectField>
    </div>

  );
}
}

export default advancedFilter
