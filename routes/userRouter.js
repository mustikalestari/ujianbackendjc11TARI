//import module
const express=require('express')
const router=express.Router()
const {userControllers}=require('../controllers')


//routes to get the data for movies based on usercontrollers (line no.7 )
//get data for movies -- API (users/)
//question number 2//
router.get('/get-movies',userControllers.GetMovie)
router.delete('/delete-movies/:id',userControllers.deleteMovie)
router.post('/add-movies',userControllers.addNewData)
router.put('/edit-movies',userControllers.editTheData)

//question number 3//
router.get('/get-categories',userControllers.GetCategory)
router.delete('delete-categories/:id',userControllers.deleteCategory)
router.post('/add-categories',userControllers.addNewDataForCategory)

//question number 4
router.get('/get-moviecat',userControllers.getDataa)
router.post('/add-moviecat',userControllers.getDataa)
router.delete('delete-moviecat',userControllers.deleteData)
module.exports=router   