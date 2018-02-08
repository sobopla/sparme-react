import React from 'react'

const VehicleDetail = (props) => {
  return (
    <div className='vehicle-detail-wrapper'>
      <div className='vehicle-detail flex-media'>
        <div className='flex-center'>
          <div className='main-info'>
            <div className='flex-center'><img src={props.image}/></div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
          </div>
        </div>

        <div className='vehicle-specs'>
          <div className='spec-heading'>Vehicle Specifications</div>
          <div className='specs flex-media'>
            <div className='spec-names border-left'>
              <div className='spec-name'>Vin</div>
              <div className='spec-name'>Exterior Color</div>
              <div className='spec-name'>Interior</div>
              <div className='spec-name'>Engine</div>
              <div className='spec-name'>Transmission</div>
              <div className='spec-name'>Drive</div>
              <div className='spec-name'>MPG</div>
            </div>
            <div className='spec-names'>
              <div className='spec-name'>{props.vin}</div>
              <div className='spec-name'>{props.extColor}</div>
              <div className='spec-name'>{props.intColor}</div>
              <div className='spec-name'>{props.engine}</div>
              <div className='spec-name'>{props.transmission}</div>
              <div className='spec-name'>{props.drive}</div>
              <div className='spec-name'>{props.mpg}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='detail-buttons flex-media'>
        <div className='green-buttons flex-media'>
          <div className='basic-button green2-border green-button'>Save</div>
          <div className='basic-button green2-border green-button'>Compare</div>
          <div className='basic-button green2-border green-button'>Ask Question</div>
        </div>
        <div className='wide-button test-drive-button'>Schedule Test Drive</div>
      </div>
    </div>
  )
}

export default VehicleDetail
