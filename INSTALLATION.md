# 🚀 Guia de Instalação - Portfólio

## 📋 Pré-requisitos

- **Node.js** 16.0.0 ou superior
- **npm** 7.0.0 ou superior (ou yarn)
- **Git** para controle de versão

## 🔧 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/my-portfolio.git
cd my-portfolio
```

### 2. Instale as Dependências

#### ⚠️ IMPORTANTE: Problemas Conhecidos e Soluções

**Problema 1**: Conflito React 19 com react-helmet-async
**Problema 2**: Configuração PostCSS com Tailwind CSS

#### ✅ Solução Definitiva (Passo a Passo):

```bash
# 1. Limpe cache e dependências antigas
npm cache clean --force
rm -rf node_modules package-lock.json

# 2. Instale com legacy peer deps (RECOMENDADO)
npm install --legacy-peer-deps

# 3. Se ainda houver erro, force a instalação
npm install --force
```

#### Verificação da Instalação:

```bash
# Verifique se as dependências foram instaladas
npm list --depth=0

# Inicie o projeto
npm start
```

### 3. Configure seus Dados

Edite os arquivos em `src/data/` com suas informações:

#### `src/data/profile.js`

```javascript
export const profileData = {
  name: 'Seu Nome Completo',
  title: 'Sua Profissão',
  location: 'Sua Cidade, Estado',
  email: 'seu.email@exemplo.com',
  phone: '+55 (11) 99999-9999',
  linkedin: 'https://linkedin.com/in/seu-perfil',
  github: 'https://github.com/seu-usuario',
  githubUsername: 'seu-usuario', // Para buscar repos automaticamente
  bio: 'Sua descrição profissional...',
  avatar: 'URL_da_sua_foto',
  resumeUrl: '/assets/seu-cv.pdf',
  website: 'https://seusite.com',
};
```

#### `src/data/experiences.js`

Adicione suas experiências profissionais seguindo o modelo existente.

#### `src/data/skills.js`

Configure suas habilidades técnicas por categoria.

#### `src/data/projects.js`

Adicione seus projetos pessoais (opcional, pois também puxa do GitHub).

### 4. Inicie o Servidor de Desenvolvimento

```bash
npm start
```

O projeto será aberto automaticamente em [http://localhost:3000](http://localhost:3000)

## 🛠️ Comandos Disponíveis

```bash
# Desenvolvimento
npm start          # Inicia servidor de desenvolvimento
npm run build      # Gera build de produção
npm test           # Executa testes
npm run eject      # Ejeta configurações (irreversível)

# Deploy
npm run deploy     # Deploy para GitHub Pages
```

## 🔧 Resolução de Problemas

### ❌ Erro: "ERESOLVE unable to resolve dependency tree"

**Causa**: Conflito entre React 19 e algumas dependências.

**✅ Solução Definitiva**:

```bash
# Limpeza completa
npm cache clean --force
rm -rf node_modules package-lock.json

# Reinstalação com legacy peer deps
npm install --legacy-peer-deps
```

### ❌ Erro: PostCSS/Tailwind CSS

**Erro**: "It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin"

**✅ Solução**: Já corrigido nos arquivos de configuração. Se persistir:

```bash
# Reinstale as dependências
npm cache clean --force
npm install --legacy-peer-deps
```

### ❌ Erro: "Module not found"

**✅ Solução**: Verificar se todas as dependências foram instaladas

```bash
npm install --legacy-peer-deps
```

### ❌ Erro: "Port 3000 is already in use"

**✅ Solução**: Usar porta diferente

```bash
PORT=3001 npm start
```

### ❌ Problemas com Tailwind CSS

**✅ Solução**: Rebuildar o projeto

```bash
npm run build
npm start
```

## 🎨 Personalização

### Cores e Tema

Edite `tailwind.config.js` para personalizar:

- Paleta de cores
- Animações
- Breakpoints
- Tipografia

### SEO

Atualize `src/constants/index.js`:

```javascript
export const SEO_CONFIG = {
  title: 'Seu Título',
  description: 'Sua Descrição',
  keywords: 'suas, palavras, chave',
  author: 'Seu Nome',
  siteUrl: 'https://seusite.com',
};
```

### Imagens

- Adicione sua foto de perfil
- Crie um arquivo `public/og-image.jpg` para redes sociais
- Adicione seu CV em `public/assets/resume.pdf`

## 📱 Deploy

### GitHub Pages

1. Configure o repositório no GitHub
2. Execute:

```bash
npm run deploy
```

### Netlify

1. Conecte seu repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `build`

### Vercel

1. Importe projeto do GitHub
2. Deploy automático configurado

## 🔍 Verificação Final

Após a instalação, verifique se:

- [ ] O site carrega em localhost:3000
- [ ] Todas as seções estão funcionando
- [ ] Navegação está responsiva
- [ ] Formulário de contato funciona
- [ ] Tema escuro/claro alterna
- [ ] Animações estão suaves
- [ ] Não há erros no console

## 📞 Suporte

Se encontrar problemas:

1. **Primeiro**: Execute a solução definitiva

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

2. **Se persistir**: Verifique se Node.js está atualizado
3. **Último recurso**: Force a instalação

```bash
npm install --force
```

## 🚀 Próximos Passos

1. **Personalize** todos os dados pessoais
2. **Adicione** seus projetos reais
3. **Configure** integração com GitHub API
4. **Otimize** imagens para web
5. **Teste** em diferentes dispositivos
6. **Deploy** para produção

---

✅ **Instalação concluída com sucesso!**

### 🎯 Comandos de Instalação Resumidos:

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/my-portfolio.git
cd my-portfolio

# Instale dependências (SOLUÇÃO DEFINITIVA)
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Inicie o projeto
npm start
```
