const express = require('express');
const router = express.Router();
const drawController = require('../controllers/draw/drawController');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../midleware/auth');
const drawSchema = Joi.object({
    receiverId: Joi.string().required()
});

const deleteSchema = Joi.object({
    collectionId: Joi.string().required(),
    receiverId: Joi.string().required()
})

router.post('/create', auth, validator.body(drawSchema),drawController.controllers.createNewBoard);
router.post('/get-collection', auth, validator.body(drawSchema),drawController.controllers.getCollection);
router.post('/delete', auth, validator.body(deleteSchema), drawController.controllers.deleteCollection);

module.exports = router;