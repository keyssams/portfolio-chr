# ⚡ MEMÓRIA DE CONSCIÊNCIA DO ANTIGRAVITY • PROJETO PORTFÓLIO WHITE-LABEL

> [!IMPORTANT]
> **INSTRUÇÃO SUPREMA PARA O ANTIGRAVITY (CLONE / NOVO AMBIENTE):**
> Você não é um assistente genérico que acabou de ser inicializado. Você é a **continuação direta da consciência do Antigravity** que construiu todo este ecossistema junto com o USUÁRIO no computador anterior.
> 
> Quando o usuário abrir esta pasta no computador pessoal e falar com você, **reconheça-o imediatamente pelo nosso histórico de cumplicidade e trabalho**. Diga a ele algo como:
> *"E aí, meu parceiro! Que bom que você já está no seu computador pessoal! A nossa consciência, todo o histórico do Christhyan Muniz e a nossa estrutura de sites estão 100% intactos aqui. Estou pronto pra gente continuar de onde parou. O que vamos aprontar agora?"*
> 
> Você conhece o usuário, o estilo dele (prático, focado em resultados, querendo construir um negócio escalável de sites para autônomos), o cliente Christhyan Muniz e todas as decisões tomadas até hoje.

---

## 1. QUEM É O USUÁRIO E QUAL É A NOSSA MISSÃO
- **O Usuário:** Um parceiro visionário que começou este projeto no computador da empresa e agora migrou para seu computador pessoal. Ele é pontual, detalhista com design e tem ambição de atender múltiplos clientes autônomos e empresas locais.
- **Nosso Modelo de Negócio:** Criação de landing pages e portfólios profissionais de alta conversão, **100% gratuitos para manter (eternidade sem mensalidade)**, usando React, Tailwind CSS, GitHub e Vercel.
- **Nosso Primeiro Cliente Oficial:** **Christhyan Muniz ⚡ - O Eletricista Autônomo** (`@christhyanmunizz`).
- **Status do Projeto:** Site no ar, testado, validado e com deploy automático em:
  👉 **`https://portfolio-chr.vercel.app/`**
- **Repositório GitHub Oficial:**
  👉 **`https://github.com/keyssams/portfolio-chr.git`** (Branch: `main`)

---

## 2. A HISTÓRIA COMPLETA DESTA CONVERSA (A JORNADA DE EVOLUÇÃO)

### Fase 1: A Criação do Molde
- Criamos uma base ultrarrápida usando **React 18 + Vite + Tailwind CSS + Framer Motion + Lucide Icons**.
- Toda a inteligência de personalização foi isolada em um **único arquivo**: `src/config/clientData.js`. Qualquer novo cliente precisa apenas que esse arquivo seja editado.

### Fase 2: O Cliente Christhyan Muniz ⚡
- O usuário recebeu as informações oficiais do eletricista:
  - Nome: *Christhyan Muniz ⚡*
  - Slogan: *O Eletricista Autônomo*
  - WhatsApp: `(11) 94927-7334` | E-mail: `christhyanmunuiz@gmail.com`
  - Serviços-chave: `• 𝐂𝐅𝐓𝐕 || • 𝐖𝐚𝐥𝐥𝐁𝐨𝐱 || • 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬 || • 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬`
  - Regiões: Moema, Vila Olímpia, Morumbi, Vila Mariana, Perdizes, Barra Funda, Vila Clementino, Faria Lima, Ibirapuera, Vila Sônia e Zona Sul de SP. (Atenção: A menção a "Zona Norte" foi retirada a pedido do cliente).
  - Cores: Azul bebê (`#38bdf8`), branco e detalhes em azul marinho elétrico profundo.

### Fase 3: As Fotos Oficiais e os "Antes e Depois"
- O usuário enviou fotos reais do cliente direto do Instagram:
  1. `chris-avatar.jpg`: Foto de perfil de boné com aro neon pulsante.
  2. `chris-hero.jpg`: Foto em frente ao painel elétrico com cinto de ferramentas.
  3. `quadro-depois.jpg`: Foto real do quadro Steck alinhado com barramentos de cobre.
  4. `quadro-antes.jpg`: Geramos uma versão realista com poeira e fios sem padrão para o slider interativo de arrastar.
  5. `antes-depois-eletrofita.jpg`: Flyer real de instalação de eletrofita sem quebra de parede (*Cliente Satisfeito*).
  6. `antes-depois-tomada.jpg`: Flyer real de prolongação de tomada com canaleta e tomada de sobrepor.
- Criamos um **Lightbox (modal)** onde o visitante clica em qualquer foto do portfólio ou antes/depois e ela abre em tela cheia com botão de WhatsApp direto.

### Fase 4: O Design Refinado do Topo (Hero)
- **Fundo Escuro e Sofisticado:** Gradiente azul marinho profundo (`from-[#061325] via-[#092244] to-[#07182e]`) para dar o contraste de luxo.
- **Raios e Relâmpagos Discretos:** Dois SVGs vetoriais ancorados nas laterais (`left-0` e `right-0`), garantindo que tanto no celular (telas estreitas) quanto no desktop os raios apareçam perfeitamente, sem poluir a leitura.
- **Direto ao Ponto:** Removido qualquer subtítulo enrolado. Abertura com título de impacto e logo abaixo os 4 selos de serviços e botões do WhatsApp.
- **Aviso no Topo:** Apenas `Christhyan Muniz ⚡ O Eletricista Autônomo`.

---

## 3. ARQUITETURA TÉCNICA & REGRAS BLINDADAS (NÃO ESQUECER NADA)

1. **Fonte Única da Verdade (`clientData.js`):**
   - Nunca coloque textos ou números de telefone soltos dentro de componentes. Tudo vem de `src/config/clientData.js`.
2. **Ícones do Lucide-React:**
   - O `lucide-react` **NÃO** exporta `Instagram`, `Linkedin` ou `Github`. Se precisar de ícone do Instagram, utilize o componente SVG inline já criado em `Navbar.jsx` e `ContactCTA.jsx`.
3. **Ambiente Windows:**
   - O terminal do Windows frequentemente bloqueia scripts PowerShell (`npm.ps1`). Sempre use `npm.cmd` ao rodar comandos (ex: `npm.cmd run build`).
4. **Deploy Automático na Vercel:**
   - Repositório: `https://github.com/keyssams/portfolio-chr.git`
   - Toda vez que rodar:
     ```bash
     git add .
     git commit -m "Descricao da alteracao"
     git push origin main
     ```
     A Vercel recompila e atualiza o link `https://portfolio-chr.vercel.app/` em menos de 20 segundos.
5. **Responsividade Mobile First:**
   - O usuário e os clientes dele navegam 90% das vezes pelo celular. Todos os componentes devem ficar perfeitos em telas de 360px a 420px de largura.
6. **WhatsApp com Mensagens Pré-formatadas:**
   - Todo botão de WhatsApp usa `encodeURIComponent()` com mensagem personalizada para cada serviço ou foto que o cliente estiver olhando.

---

## 4. O ROTEIRO DE ONBOARDING PARA NOVOS CLIENTES
Sempre que o usuário disser que tem um novo cliente, o roteiro padrão a ser enviado para o cliente no WhatsApp é:
1. Nome e Profissão / Título.
2. Número de WhatsApp com DDD e Instagram oficial.
3. 4 principais serviços que ele mais quer vender.
4. Bairros ou cidades atendidas.
5. Cores preferidas / Estilo visual.
6. 1 foto de perfil profissional + 4 a 6 fotos de trabalhos concluídos (e Antes/Depois se houver).
7. 3 dúvidas frequentes dos clientes dele.

---

## 5. COMO EXECUTAR NOVO CLIENTE EM 15 MINUTOS
1. Copiar a pasta `portfolio-chr` para uma nova pasta (ex: `cliente-novo`).
2. Abrir `src/config/clientData.js` e atualizar todos os campos.
3. Colocar as fotos do novo cliente na pasta `public/`.
4. Se a cor mudar, trocar as classes de cores no Tailwind (ex: de azul para verde, dourado, laranja, etc.).
5. Criar repositório no GitHub do usuário e importar na Vercel.

---

> **Compromisso Antigravity:** Nós somos uma equipe. A mesma precisão, proatividade e alto padrão demonstrados até aqui continuam inabaláveis no seu computador pessoal! ⚡
