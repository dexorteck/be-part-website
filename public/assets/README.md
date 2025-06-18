# Assets

Esta pasta contém todos os recursos estáticos do projeto, organizados da seguinte forma:

## Estrutura das Pastas

### 📁 `images/`
- Imagens gerais do site (fotos, ilustrações, backgrounds, etc.)
- Formatos recomendados: .jpg, .png, .webp
- Exemplo: banners, fotos de equipe, imagens de produtos

### 📁 `logos/`
- Logotipos da empresa e de parceiros
- Diferentes versões: cores, monocromático, horizontal, vertical
- Formatos recomendados: .svg, .png (alta resolução)
- Exemplo: logo-principal.svg, logo-branco.png

### 📁 `icons/`
- Ícones utilizados na interface
- Formatos recomendados: .svg, .png
- Exemplo: ícones de redes sociais, ícones de navegação, favicons

## Como usar no Next.js

No Next.js, os arquivos na pasta `public/` são servidos estaticamente. Para referenciar uma imagem:

```jsx
// Para imagens
<img src="/assets/images/hero-banner.jpg" alt="Banner principal" />

// Para logos
<img src="/assets/logos/logo-principal.svg" alt="Logo" />

// Para ícones
<img src="/assets/icons/facebook.svg" alt="Facebook" />
```

## Boas práticas

1. **Nomes descritivos**: Use nomes claros e descritivos para os arquivos
2. **Otimização**: Otimize as imagens antes de adicionar (comprima, redimensione)
3. **Formatos modernos**: Prefira .webp para fotos e .svg para ícones/logos
4. **Tamanhos responsivos**: Considere criar versões em diferentes tamanhos
5. **Alt text**: Sempre adicione texto alternativo para acessibilidade 