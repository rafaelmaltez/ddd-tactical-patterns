# ddd-tactical-patterns

Repositório com o código referente aos desafios do módulo DDD Tactical Patterns do curso Full Cycle.

Para testar o projeto, certifique-se de ter o Nodejs a partir da versão 18 instalado.

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

Todos os testes devem estar passando.

O código referente ao desafio 1, `Implementando os métodos de Order Repository` se encontram nos arquivos linkados abaixo:

- [Order Repository](./src/infrastructure/repository/order.repository.ts)
- [Testes de Order Repository](./src/infrastructure/repository/order.repository.spec.ts)


O código referente ao desafio 2, `Implementando Domain Events de Customer` se encontram no diretório [src/domain/event/customer](./src/domain/event/customer/), o [event dispatcher](./src/domain/event/@shared/event-dispatcher.ts) foi refatorado para ser um singleton e o entry point para disparo dos eventos se encontra no [index.ts](./src/index.ts)

Para executar o desafio de customer events, basta rodar `npm run challenge` e conferir a saída no terminal.

