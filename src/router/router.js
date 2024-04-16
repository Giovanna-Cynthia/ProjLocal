const {Router} = require("express");
const locationController = require('../controller/locationController');

const router = Router();

router.get('/', locationController.getHome);
router.get('/contato', locationController.getContact);
router.get('/home',locationController.getHome);
router.get('/location', locationController.getAllLocation);
router.get('/formulario',locationController.getForm);
router.get('/newcontact',locationController.newContact);
//router.post('/newcontact', locationController.newContact);


module.exports = router;