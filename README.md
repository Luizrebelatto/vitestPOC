# Vitest POC - Projeto de Exemplo com Testes e Cobertura

Este é um projeto de exemplo que demonstra o uso do Vitest para testes unitários e de integração, incluindo configuração de cobertura de testes.

## 🚀 Funcionalidades

O projeto inclui várias funções matemáticas e utilitárias:

### Funções Matemáticas Básicas
- `add(a, b)` - Soma dois números
- `subtract(a, b)` - Subtrai dois números
- `multiply(a, b)` - Multiplica dois números
- `divide(a, b)` - Divide dois números

### Utilitários Numéricos
- `isEven(num)` - Verifica se um número é par
- `isPrime(num)` - Verifica se um número é primo
- `factorial(num)` - Calcula o fatorial de um número
- `power(base, exponent)` - Calcula a potência de um número

### Utilitários de Array
- `findMax(numbers)` - Encontra o maior número em um array
- `findMin(numbers)` - Encontra o menor número em um array
- `calculateAverage(numbers)` - Calcula a média de um array de números

## 📦 Instalação

```bash
npm install
```

## 🧪 Executando os Testes

### Executar todos os testes
```bash
npm test
```

### Executar testes uma vez (sem modo watch)
```bash
npm run test:run
```

### Executar testes com cobertura
```bash
npm run test:coverage
```

### Executar testes com interface visual
```bash
npm run test:ui
```

### Executar testes em modo watch
```bash
npm run test:watch
```

## 📊 Cobertura de Testes

O projeto está configurado para gerar relatórios de cobertura usando o V8 coverage provider. Os relatórios são gerados em:

- **Terminal**: Resumo da cobertura
- **HTML**: Relatório detalhado em `coverage/`
- **JSON**: Dados de cobertura em formato JSON

### Metas de Cobertura
- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%
- **Statements**: 80%

## 🏗️ Estrutura do Projeto

```
vitestPOC/
├── src/
│   ├── index.js                 # Funções principais
│   └── __tests__/
│       ├── math.test.js         # Testes das funções matemáticas
│       ├── number-utils.test.js # Testes dos utilitários numéricos
│       ├── array-utils.test.js  # Testes dos utilitários de array
│       └── integration.test.js  # Testes de integração
├── vitest.config.js             # Configuração do Vitest
├── package.json                 # Dependências e scripts
└── README.md                    # Este arquivo
```

## 🧪 Tipos de Testes

### 1. Testes Unitários
- **math.test.js**: Testa cada função matemática individualmente
- **number-utils.test.js**: Testa utilitários numéricos
- **array-utils.test.js**: Testa funções de manipulação de arrays

### 2. Testes de Integração
- **integration.test.js**: Testa múltiplas funções trabalhando juntas
- Cenários do mundo real
- Verificação de propriedades matemáticas
- Validação de casos extremos

## 📈 Exemplos de Testes

### Teste de Função Simples
```javascript
it('deve somar dois números positivos', () => {
  expect(add(2, 3)).toBe(5)
  expect(add(10, 20)).toBe(30)
})
```

### Teste de Validação de Erro
```javascript
it('deve lançar erro para parâmetros inválidos', () => {
  expect(() => add('2', 3)).toThrow('Ambos os parâmetros devem ser números')
})
```

### Teste de Integração
```javascript
it('deve calcular expressões matemáticas complexas', () => {
  const result = subtract(multiply(add(2, 3), 4), divide(10, 2))
  expect(result).toBe(15)
})
```

## 🔧 Configuração do Vitest

O projeto usa a configuração padrão do Vitest com algumas personalizações:

- **Environment**: Node.js
- **Coverage Provider**: V8
- **Reporters**: Text, JSON, HTML
- **Thresholds**: 80% para todas as métricas

## 🚀 Próximos Passos

Para expandir este projeto, você pode:

1. **Adicionar mais funções matemáticas**
   - Trigonometria
   - Estatísticas avançadas
   - Álgebra linear

2. **Implementar testes de performance**
   - Benchmarks com diferentes tamanhos de entrada
   - Comparação de algoritmos

3. **Adicionar testes de edge cases**
   - Números muito grandes/pequenos
   - Precisão de ponto flutuante
   - Overflow de números

4. **Implementar testes de mutação**
   - Usar ferramentas como Stryker
   - Verificar qualidade dos testes

## 📚 Recursos Adicionais

- [Documentação do Vitest](https://vitest.dev/)
- [Guia de Cobertura de Testes](https://vitest.dev/guide/coverage.html)
- [Melhores Práticas de Testes](https://vitest.dev/guide/best-practices.html)

## 🤝 Contribuição

Este é um projeto de exemplo, mas sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
