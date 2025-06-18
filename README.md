# Be Part – Events & Communication

Uma landing page elegante e responsiva para a marca "Be Part – Events & Communication", desenvolvida com React, Next.js e Tailwind CSS.

## 🎯 Sobre o Projeto

Landing page institucional que apresenta os serviços da Be Part de forma sofisticada e moderna, destacando:
- Consultoria estratégica
- Planejamento e produção de eventos
- Serviços de comunicação
- Soluções sustentáveis (Evergreen Solutions)

## 🎨 Design

- **Cores**: Branco, preto, cinza escuro e dourado suave/bege claro
- **Tipografia**: Playfair Display (serif) para headings, Inter (sans-serif) para texto
- **Layout**: Espaços amplos, transições suaves, efeitos de scroll elegantes
- **Responsivo**: Totalmente adaptado para mobile, tablet e desktop

## 🔧 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display, Inter)
- **Language**: TypeScript

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd be-part-landing
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🚀 Deploy

### Produção
```bash
npm run build
npm run start
```

### Deploy na Vercel (recomendado)
```bash
npx vercel
```

## 📁 Estrutura do Projeto

```
be-part-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx          # Seção principal
│   ├── About.tsx         # Sobre nós + citação Ricardo Reis
│   ├── Services.tsx      # Serviços (3 cards)
│   ├── Evergreen.tsx     # Soluções sustentáveis
│   ├── Testimonials.tsx  # Fundadores
│   └── CTA.tsx          # Call to action final
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎯 Seções da Landing Page

### 1. Hero Section
- Frase principal: "BE PART: EVERY PIECE MATTERS"
- Subheadline: "Eventos. Comunicação. Consultoria Estratégica."
- CTA principal: "Vamos conversar"

### 2. Sobre Nós
- Texto institucional
- Citação poética de Ricardo Reis
- Missão e visão da empresa

### 3. Serviços
- **Consultoria Estratégica**: Soluções alinhadas com objetivos claros
- **Eventos**: Planejamento e produção de experiências memoráveis
- **Comunicação**: Identidade visual, redes sociais, conteúdo

### 4. Evergreen Solutions
- Catering ecológico
- Gestão de resíduos
- Credenciação eletrônica
- Impacto social

### 5. Fundadores
- Duarte Mairos – Co-founder & Communication Director
- Vítor Macias – Co-founder & Events Director
- Estatísticas da empresa

### 6. Call to Action
- Frase final: "LET US BE PART."
- Informações de contato
- Links para redes sociais

## 🎨 Personalização

### Cores
As cores podem ser ajustadas no arquivo `tailwind.config.js`:
```javascript
colors: {
  gold: {
    // Tons dourados personalizados
  }
}
```

### Tipografia
Fontes configuradas no `app/globals.css`:
- Playfair Display (serif)
- Inter (sans-serif)

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Otimizada para SEO
- Lazy loading de componentes
- Fontes otimizadas
- Imagens responsivas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Contato

- **Email**: info@bepart.pt
- **Telefone**: +351 123 456 789
- **Localização**: Lisboa, Portugal

---

**Be Part – Events & Communication**  
*Conectamos pessoas, ideias e experiências. Cada peça conta.* 