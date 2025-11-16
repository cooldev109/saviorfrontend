# Savior Frontend

Frontend da plataforma Savior - Eco Challenge & Marketplace

## 🚀 Stack Tecnológica

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router DOM** - Navigation
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar em Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em: http://localhost:5173

## 🔨 Build para Produção

```bash
npm run build
```

## 🌍 Variáveis de Ambiente

Copie `.env.example` para `.env` e configure:

```
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_APP_ENV=development
```

## 📁 Estrutura de Pastas

```
/src
  /assets          # Imagens, fontes, ícones
  /components      # Componentes reutilizáveis
  /pages           # Páginas/rotas
  /hooks           # Custom hooks
  /context         # React Context
  /services        # Serviços de API
  /lib             # Utilitários
  /types           # TypeScript types
```

## 🎨 Regras de Linguagem

- **Código**: Inglês (variáveis, funções, tipos, comentários)
- **UI**: Português Brasileiro (labels, botões, mensagens)

## 📝 Comandos Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
