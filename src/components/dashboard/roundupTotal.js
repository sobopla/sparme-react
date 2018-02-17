import React from 'react'

const total = (array) => {
  var sum = 0
  array.forEach(function(obj){
    sum += parseFloat(obj.paid.replace('$',''))
  })
  return sum
}

const filter_and_sort = (array) => {
  array = array.filter(obj => obj.added==true).sort((a,b)=>{
    return new Date(b.date) - new Date(a.date)
  })
  return array.length>0 ? array : [{storename:'None', roudup:'$0', paid:'$0'}]
}

const roundupTotal = (props) => {
  return (
    <div className='upcoming-appointments-wrapper flex-center'>
      <div className='upcoming-appointments'>
        <div className='upcoming-appointments-header'>Total Donated</div>
        <div className='flex-media appointment'>
            <div className='circle'>
              <div className='place'> so far </div>
              <div className='change'> {props.donations.current_investment} </div>
              <div className='paid'> ${5.0 - props.donations.current_investment.replace('$', '')} until $5 </div>

              </div>

              <h1
                className='total-donation'>
                ${
                  total(props.donations.history)
                } Donated
              </h1>

            <div className = 'charities' id='top-dashboard-charity-display'>
              {props.charities.filter(chr=>chr.added).map(charity=><div className='charity'>{charity.title}</div>
              )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default roundupTotal
