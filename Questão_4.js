class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 9, 7.8),
    new Aluno("Carlos", "Pereira", 6, 9.2),
    new Aluno("Ana", "Santos", 5, 6.5),
    new Aluno("Pedro", "Lima", 8, 7.3)
];

function mostrarDadosAlunos(alunos) {
    alunos.forEach(aluno => {
        let nome = aluno.nomeCompleto();
        let media = aluno.media().toFixed(2);
        let situacao = aluno.situacao();
        console.log(`Nome Completo: ${nome}, Média: ${media}, Situação: ${situacao}`);
        alert(`Nome Completo: ${nome}\nMédia: ${media}\nSituação: ${situacao}`);
    });
}

mostrarDadosAlunos(alunos.slice(0, 3));
