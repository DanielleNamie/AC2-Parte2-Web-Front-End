const professores = [
  {
    id: "1",
    nome: "Prof. Gabriel",
    idade: 45,
    departamento: "Informática",
    turmas: [
      { codigo: "1A", disciplina: "INF101", alunos: ["Yukari", "Namie", "Juliano"] },
      { codigo: "2B", disciplina: "INF201", alunos: ["Gabriela", "Carlos"]}
    ]
  },
  {
    id: "2",
    nome: "Prof. Melissa",
    idade: 35,
    departamento: "Dança",
    turmas: [
      { codigo: "1A", disciplina: "DAN101", alunos: ["Daniela", "Júlia", "Gabriel"] },
      { codigo: "2B", disciplina: "DAN201", alunos: ["Gabriela", "Carlos", "Juliano"]}
    ]
  },
  {
    id: "3",
    nome: "Prof. Júlia",
    idade: 36,
    departamento: "Artes",
    turmas: [
      { codigo: "1A", disciplina: "ART101", alunos: ["Daniela", "João"]},
      { codigo: "2B", disciplina: "ART201", alunos: ["Gabriel", "Yukari", "Carlos"]}
    ]
  },
  {
    id: "4",
    nome: "Prof. Danielle",
    idade: 36,
    departamento: "Matemática",
    turmas: [
      { codigo: "1A", disciplina: "MAT101", alunos: ["Yukari", "Júlia"]},
      { codigo: "2B", disciplina: "MAT201", alunos: ["Juliano", "Carlos", "Gabriela"]}
    ]
  }
];

module.exports = professores;