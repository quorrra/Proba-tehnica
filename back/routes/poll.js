const router = require('express').Router();

const controller = require('../controllers/pollController');

router.route('/').get(controller.showPolls); 
router.route('/').post(controller.createPoll);
router.route('/:id').delete(controller.deletePoll);
router.route('/update/:id').patch(controller.updatePoll);



module.exports = router;