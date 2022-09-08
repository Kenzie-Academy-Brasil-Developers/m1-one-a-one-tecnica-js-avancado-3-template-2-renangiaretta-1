const funcionarios = [
    {
        nome: "Jose",
        email: "jose@gmail.com",
        departamento: "Financeiro",
        salario: 1200,
        tempoEmpresa: 2,
    },

    {
        nome: "João",
        email: "joao@gmail.com",
        departamento: "TI",
        salario: 1200,
        tempoEmpresa: 2,
    },
    {
        nome: "Andre",
        email: "andre@gmail.com",
        departamento: "Infra",
        salario: 1200,
        tempoEmpresa: 8,
    },
];

function atualizaSalario(lista){
    for(let i=0; i<lista.length; i++){
        if(lista[i].tempoEmpresa >= 3){
            lista[i].salario = (lista[i].salario + 800)
        }
    }
    return lista
}
console.log(atualizaSalario(funcionarios))