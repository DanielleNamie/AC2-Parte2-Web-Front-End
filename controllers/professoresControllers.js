let professores = require('../data/professoresData');

const listarProfessores = (req, res) => {
    res.status(200).json(professores);
};

const buscarProfessor = (req, res) => {
    const { id } = req.params;
    const professor = professores.find(p => p.id === id);

    if (professor) {
        res.status(200).json(professor);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

const listarTurmasPorProfessor = (req, res) => {
    const { id } = req.params;
    const professor = professores.find(p => p.id === id);

    if (professor) {
        res.status(200).json(professor.turmas);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

const atualizarProfessor = (req, res) => {
    const { id } = req.params;
    const { nome, idade, departamento } = req.body;

    const index = professores.findIndex(p => p.id === id);

    if (index !== -1) {
        professores[index] = {
            ...professores[index],
            nome: nome || professores[index].nome,
            idade: idade || professores[index].idade,
            departamento: departamento || professores[index].departamento,
        };
        res.status(200).json(professores[index]);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

const adicionarTurma = (req, res) => {
    const { id } = req.params;
    const novaTurma = req.body;

    const professor = professores.find(p => p.id === id);

    if (professor) {
        professor.turmas.push(novaTurma);
        res.status(201).json(professor.turmas);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

const listarPorDepartamento = (req, res) => {
    const { departamento } = req.params;
    const professoresDoDepartamento = professores.filter(
        p => p.departamento.toLowerCase() === departamento.toLowerCase()
    );

    res.status(200).json(professoresDoDepartamento);
};

const removerProfessor = (req, res) => {
    const { id } = req.params;
    const initialLength = professores.length;

    professores = professores.filter(p => p.id !== id);

    if (professores.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

module.exports = {
    listarProfessores,
    buscarProfessor,
    listarTurmasPorProfessor,
    atualizarProfessor,
    adicionarTurma,
    listarPorDepartamento,
    removerProfessor,
};