const fs = require('fs')
let data = require('./database')
data.forEach((item) => {
  let a = data.some((item2) => {
    return item2.parent_id === item.id
  })
  if (a) {
    item.isLeap = false
  }else{
    item.isLeap = true
  }
})
fs.writeFileSync('./database.js',JSON.stringify(data))