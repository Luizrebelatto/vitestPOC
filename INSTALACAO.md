# Instruções de Instalação

## Pré-requisitos

Este projeto requer **Node.js** versão 16 ou superior.

## Instalando o Node.js

### Opção 1: Usando Homebrew (Recomendado para macOS)

```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js
brew install node

# Verificar a instalação
node --version
npm --version
```

### Opção 2: Download direto do site oficial

1. Acesse [nodejs.org](https://nodejs.org/)
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador
4. Verifique a instalação:
   ```bash
   node --version
   npm --version
   ```

### Opção 3: Usando nvm (Node Version Manager)

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Recarregar o terminal
source ~/.zshrc

# Instalar a versão LTS do Node.js
nvm install --lts

# Usar a versão instalada
nvm use --lts

# Verificar a instalação
node --version
npm --version
```

## Após instalar o Node.js

1. **Instalar as dependências do projeto:**
   ```bash
   npm install
   ```

2. **Executar os testes:**
   ```bash
   # Executar todos os testes
   npm test
   
   # Executar testes com cobertura
   npm run test:coverage
   
   # Executar testes com interface visual
   npm run test:ui
   ```

## Verificando a instalação

Execute os seguintes comandos para verificar se tudo está funcionando:

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version

# Verificar se as dependências foram instaladas
ls node_modules/

# Executar um teste simples
npm run test:run
```

## Solução de problemas

### Erro: "node: command not found"
- Verifique se o Node.js foi instalado corretamente
- Recarregue o terminal após a instalação
- Verifique se o PATH está configurado corretamente

### Erro: "npm: command not found"
- O npm vem junto com o Node.js
- Se o Node.js está funcionando mas o npm não, reinstale o Node.js

### Erro de permissão
- No macOS, pode ser necessário usar `sudo` para algumas operações
- Considere usar nvm para evitar problemas de permissão

## Recursos adicionais

- [Documentação oficial do Node.js](https://nodejs.org/docs/)
- [Guia de instalação do Homebrew](https://docs.brew.sh/Installation)
- [Documentação do nvm](https://github.com/nvm-sh/nvm)
