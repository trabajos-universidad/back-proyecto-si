const { Router } = require('express');
const { clientePost, clienteGet } = require('../controllers/cliente');
const router = Router();

router.get('/', clienteGet);
router.post('/', clientePost);

module.exports = router;
