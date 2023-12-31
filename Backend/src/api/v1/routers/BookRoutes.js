const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X
const BooksControllers = require('../controllers/BookControllers');
const FetchUser = require('../middlewares/FetchUser'); //Fetch the user token

const SponserRole = require('../middlewares/SponserRole'); //Fetch details of the role of sponser only can proceesed further


//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.get('/fetchPlaces',BooksControllers().fetchPlaces); //Fetching all the places which are availabel, using GET '/api/v1/book/fetchPlace'
Routers.get('/showDetails/:id',BooksControllers().showDetails); //Showing only one destination at a time, using GET '/api/v1/book/showDetails/:id'

Routers.get('/fetchAllBooked',FetchUser,BooksControllers().FetchAllBooked); //Show the booked places, using GET '/api/v1/book/fetchAllBooked'
Routers.delete('/removeBooked/:id',FetchUser,BooksControllers().removeBooked); //Removing the booked places, using DELETE '/api/v1/book/removeBooked/:id'
Routers.delete('/empty',FetchUser,BooksControllers().Empty); //Empty the documents of users after payment successed, using DELETE '/api/v1/book/empty'

Routers.post('/makeRequest/:place_id',FetchUser,BooksControllers().makeRequest); //Make a request by the user to book a place, using POST '/api/v1/book/makeRequest'
Routers.put('/successRequest/:place_id', FetchUser, SponserRole ,BooksControllers().successRequest); //After requesting to processeding the place booking by the sponser '/api/v1/sponser/processedRequest'
Routers.put('/cancelRequest/:place_id', FetchUser, SponserRole ,BooksControllers().cancelRequest); //After requesting to processeding the place booking by the sponser '/api/v1/sponser/processedRequest'



module.exports = Routers