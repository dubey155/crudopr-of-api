const express = require("express")
const {handlegetallusers , 
    handlegetuserbyid ,
    handleUpdateuserbyid,
    handleDeleteuserbyid,
    handleCreateanewuser} = require("../Controllers/user_controller")
const router = express.Router()


//Get all users as JSON
router.route("/").get(handlegetallusers).post(handleCreateanewuser)
//Route for specific user operations
router
  .route("/:id")
  .get(handlegetuserbyid)
  .patch(handleUpdateuserbyid)
  .delete(handleDeleteuserbyid)

module.exports = router