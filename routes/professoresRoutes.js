const express = require('express');
const router = express.Router();
const professoresControllers = require('../controllers/professoresControllers');

router.get('/', professoresControllers.listarProfessores);
router.get('/:id', professoresControllers.buscarProfessor);
router.get('/:id/turmas', professoresControllers.listarTurmasPorProfessor);
router.put('/:id', professoresControllers.atualizarProfessor);
router.post('/:id/turmas', professoresControllers.adicionarTurma);
router.delete('/:id', professoresControllers.removerProfessor);
router.get('/departamento/:departamento', professoresControllers.listarPorDepartamento);

module.exports = router;