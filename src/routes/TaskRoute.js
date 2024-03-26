import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Testando rotas');
});
router.post('/',);
router.get('/:id',);
router.put('/:id',);
router.delete('/:id',);

export default router;