# 📝 Fontes Personalizadas

## Como Adicionar a Fonte da Empresa

### 1. Coloque os arquivos de fonte nesta pasta
```
public/fonts/
├── BrandFont-Regular.woff2
├── BrandFont-Regular.woff
├── BrandFont-Regular.ttf
├── BrandFont-Bold.woff2
├── BrandFont-Bold.woff
├── BrandFont-Bold.ttf
├── BrandFont-Light.woff2
├── BrandFont-Light.woff
└── BrandFont-Light.ttf
```

### 2. Atualize os nomes dos arquivos no CSS
No arquivo `app/globals.css`, atualize os URLs das fontes:

```css
@font-face {
  font-family: 'BrandFont';
  src: url('/fonts/SuaFonte-Regular.woff2') format('woff2'),
       url('/fonts/SuaFonte-Regular.woff') format('woff'),
       url('/fonts/SuaFonte-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

### 3. Como usar no código

#### Com Tailwind CSS:
```jsx
<h1 className="font-brand">Título com fonte da empresa</h1>
<p className="font-brand font-bold">Texto em negrito</p>
<span className="font-brand font-light">Texto light</span>
```

#### Com CSS direto:
```jsx
<h1 style={{ fontFamily: 'BrandFont, sans-serif' }}>Título</h1>
```

### 4. Formatos de Fonte Recomendados

**Melhor performance:**
- `.woff2` (mais compacto, melhor suporte moderno)
- `.woff` (fallback para navegadores mais antigos)

**Se só tiver .ttf ou .otf:**
- Funciona, mas são arquivos maiores
- Converta para .woff2 usando ferramentas online

### 5. Ferramentas para Converter Fontes
- [Convertio](https://convertio.co/ttf-woff2/)
- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

### 6. Aplicar no Hero
Para usar a fonte da empresa no título principal:

```jsx
<h1 className="font-brand text-5xl md:text-7xl lg:text-8xl font-bold">
  BE PART: EVERY PIECE MATTERS
</h1>
``` 