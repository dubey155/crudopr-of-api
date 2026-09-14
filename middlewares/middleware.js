const fs = require("fs")

function logreqres(filename){
  return (req,res,next) => {

    fs.appendFile(
      filename,
      `${req.method}\n ${Date.now()}\n ${req.ip} ${req.url}\n`,
      (err,data) =>{
        next()
      }
    )
  }
}
module.exports ={
  logreqres,
}