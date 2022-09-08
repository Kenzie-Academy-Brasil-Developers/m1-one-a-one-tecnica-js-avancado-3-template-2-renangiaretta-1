# Simulado de entrevista técnica

Desenvolva uma função chamada **atualizaSalario** que recebe como parâmetro uma **lista de funcionários**. Está lista já estará criada no script.js.

Sua função deve percorrer a lista e verificar o **tempoEmpresa** de cada funcionário, caso o **tempoEmpresa** seja **maior ou igual a 3** você deve dar um aumento de **800** ao seu salário. Ao final deve ser retornada a lista com os salários atualizados.

Exemplo de retorno:

```javascript
[
    {
        nome: "Jose",
        email: "jose@gmail.com",
        departamento: "Financeiro",
        salario: 1700,
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
        salario: 2000,
        tempoEmpresa: 8,
    },
];
```

Repare que o salário de **"Andre"** era **1200** e foi atualizado para  **2000**, pois seu **tempoEmpresa** é maior ou igual a 3.