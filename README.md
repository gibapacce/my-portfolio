# 🚀 Portfólio Profissional - Desenvolvedor Full Stack

Um portfólio moderno e responsivo desenvolvido com React, Tailwind CSS e Framer Motion, otimizado para performance e SEO.

## ✨ Características

### 🎨 Design & UX

- **Interface moderna** com gradientes e efeitos visuais
- **Totalmente responsivo** para todos os dispositivos
- **Animações suaves** com Framer Motion
- **Modo escuro/claro** com persistência local
- **Navegação intuitiva** com indicadores visuais

### ⚡ Performance

- **Lazy loading** de componentes e imagens
- **Code splitting** automático
- **Otimização de imagens** com WebP
- **Bundle otimizado** com tree shaking
- **Skeleton loaders** para melhor UX

### 🔍 SEO & Acessibilidade

- **Meta tags completas** (Open Graph, Twitter Cards)
- **Schema markup** estruturado
- **Sitemap.xml** e robots.txt
- **Semântica HTML5** adequada
- **Suporte a screen readers**

### 🛠️ Arquitetura

- **Componentes modulares** e reutilizáveis
- **Hooks customizados** para lógica compartilhada
- **Gerenciamento de estado** otimizado
- **Separação de responsabilidades**
- **Estrutura escalável**

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── sections/        # Seções do portfólio
│   ├── Navigation.jsx   # Navegação principal
│   ├── SEO.jsx         # Componente de SEO
│   ├── Loading.jsx     # Componentes de loading
│   └── ThemeToggle.jsx # Toggle de tema
├── data/               # Dados do portfólio
│   ├── profile.js      # Informações pessoais
│   ├── experiences.js  # Experiências profissionais
│   ├── skills.js       # Habilidades técnicas
│   └── projects.js     # Projetos desenvolvidos
├── hooks/              # Hooks customizados
│   ├── useGitHub.js    # Integração com GitHub API
│   ├── useLocalStorage.js # Persistência local
│   └── useImageOptimization.js # Otimização de imagens
├── constants/          # Constantes da aplicação
└── utils/              # Utilitários
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/my-portfolio.git
cd my-portfolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure seus dados**
   Edite os arquivos em `src/data/` com suas informações:

- `profile.js` - Informações pessoais
- `experiences.js` - Experiências profissionais
- `skills.js` - Habilidades técnicas
- `projects.js` - Seus projetos

4. **Inicie o servidor de desenvolvimento**

```bash
npm start
```

5. **Acesse** [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

## 🎯 Personalização

### Dados Pessoais

Edite `src/data/profile.js`:

```javascript
export const profileData = {
  name: "Seu Nome",
  title: "Sua Profissão",
  email: "seu@email.com",
  // ... outros dados
};
```

### Cores e Tema

Modifique `tailwind.config.js` para personalizar:

- Paleta de cores
- Animações
- Breakpoints
- Tipografia

### SEO

Atualize `src/constants/index.js`:

```javascript
export const SEO_CONFIG = {
  title: "Seu Título",
  description: "Sua Descrição",
  // ... outras configurações
};
```

## 📦 Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca principal
- **Tailwind CSS 4** - Framework CSS
- **Framer Motion 10** - Animações

### Funcionalidades

- **React Helmet Async** - SEO dinâmico
- **Lucide React** - Ícones modernos
- **GitHub API** - Integração com repositórios

### Desenvolvimento

- **Create React App** - Configuração base
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade CSS

## 🔧 Scripts Disponíveis

- `npm start` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm test` - Executar testes
- `npm run deploy` - Deploy para GitHub Pages

## 📊 Performance

### Métricas Otimizadas

- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms

### Otimizações Implementadas

- Lazy loading de componentes
- Otimização de imagens
- Code splitting
- Tree shaking
- Compressão de assets

## 🌐 SEO Features

- Meta tags completas
- Open Graph tags
- Twitter Cards
- Schema.org markup
- Sitemap XML
- Robots.txt otimizado

## 📱 Responsividade

Testado e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: seu@email.com
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
