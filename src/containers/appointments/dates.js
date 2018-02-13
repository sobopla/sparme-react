export const times = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm']

export function addDates(dates){
  const dateToAdd = new Date(Date.now())
  for(let i=0; i<31; i++){
    dates.push(getDay(dateToAdd) + ',   ' + getMonth(dateToAdd) + ' ' + dateToAdd.getDate())
    dateToAdd.setHours(dateToAdd.getHours() + 24)
  }
}

export function getMonth (date){
  let month = date.getMonth()
  switch(month) {
    case 0: return 'January'
    case 1: return 'February'
    case 2: return 'March'
    case 3: return 'April'
    case 4: return 'May'
    case 5: return 'June'
    case 6: return 'July'
    case 7: return 'August'
    case 8: return 'September'
    case 9: return 'October'
    case 10: return 'November'
    case 11: return 'December'
  }
}

export function getDay(date){
  let day = date.getDay()
  switch(day) {
    case 0: return 'Sunday'
    case 1: return 'Monday'
    case 2: return 'Tuesday'
    case 3: return 'Thursday'
    case 4: return 'Friday'
    case 5: return 'Saturday'
    case 6: return 'Sunday'
  }
}
