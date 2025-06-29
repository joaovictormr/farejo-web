# FarejoApp Website

Site oficial do FarejoApp hospedado no GitHub Pages com domínio customizado.

## 🌐 Acesso

- **URL Principal:** https://farejoapp.com.br
- **GitHub Pages:** https://[seu-usuario].github.io/farejoapp-web

## 📁 Estrutura do Site

```
farejoapp-web/
├── index.html          # Landing page principal
├── privacy.html        # Política de privacidade
├── terms.html          # Termos de uso
├── contact.html        # Página de contato
├── CNAME              # Configuração do domínio customizado
└── README.md          # Este arquivo
```

## 🚀 Deploy no GitHub Pages

### Passo 1: Configurar o Repositório

1. Faça push dos arquivos para o repositório GitHub
2. Vá para **Settings** > **Pages** no seu repositório
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha **main** branch e **/ (root)**
5. Clique em **Save**

### Passo 2: Configurar Domínio Customizado

#### No GitHub:
1. Em **Settings** > **Pages**
2. Em **Custom domain**, digite: `farejoapp.com.br`
3. Marque **Enforce HTTPS**

#### No Provedor DNS:
Configure os seguintes registros DNS:

```
Tipo: CNAME
Nome: www
Valor: [seu-usuario].github.io
TTL: 1 hora (3600 segundos)

Tipo: A (para domínio raiz)
Nome: @
Valores:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
TTL: 1 hora (3600 segundos)
```

### Passo 3: Verificação

1. Aguarde a propagação DNS (pode levar até 24 horas)
2. Acesse https://farejoapp.com.br
3. Verifique se o certificado SSL está ativo

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com CSS Grid e Flexbox
- **JavaScript** - Interatividade e funcionalidades
- **Google Fonts** - Tipografia (Inter)
- **Responsive Design** - Compatível com todos os dispositivos

## 📱 Recursos

- ✅ Design responsivo
- ✅ Performance otimizada
- ✅ SEO-friendly
- ✅ Acessibilidade
- ✅ Formulário de contato funcional
- ✅ FAQ interativo
- ✅ Navegação suave
- ✅ Efeitos visuais modernos

## 📄 Páginas

### Página Principal (`index.html`)
- Hero section com call-to-action
- Seção de recursos/benefícios
- Footer com links úteis
- Navegação fixa responsiva

### Política de Privacidade (`privacy.html`)
- Documento completo sobre coleta de dados
- Direitos dos usuários (LGPD)
- Informações de contato para privacidade

### Termos de Uso (`terms.html`)
- Condições de uso da plataforma
- Responsabilidades do usuário
- Limitações de responsabilidade

### Contato (`contact.html`)
- Formulário de contato funcional
- Informações de contato
- FAQ (Perguntas Frequentes)
- Links para redes sociais

## 🔧 Personalização

Para personalizar o site:

1. **Cores:** Modifique as variáveis CSS em `:root`
2. **Conteúdo:** Edite os textos diretamente nos arquivos HTML
3. **Imagens:** Adicione suas imagens na pasta `/assets/images/`
4. **Funcionalidades:** Expanda o JavaScript conforme necessário

## 📊 Analytics e Monitoramento

Para adicionar analytics:

1. **Google Analytics:** Adicione o código de tracking no `<head>`
2. **Google Search Console:** Verifique a propriedade do domínio
3. **Facebook Pixel:** Para tracking de conversões (opcional)

## 🔒 Segurança

- HTTPS enforçado via GitHub Pages
- Headers de segurança configurados
- Validação de formulários client-side
- Proteção contra spam básica

## 📞 Suporte

Para dúvidas sobre o website:
- **Email:** contato@farejoapp.com.br
- **Telefone:** (11) 9999-9999

## 📜 Licença

© 2024 FarejoApp. Todos os direitos reservados.

---

**Última atualização:** Janeiro 2024 