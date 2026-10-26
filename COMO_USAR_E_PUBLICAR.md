# 🚀 Guia de Operação: Portfólio & Landing Page para Clientes

Este projeto é um **template base de alta performance** (React 18 + Tailwind CSS + Vite) projetado para você criar, personalizar e publicar portfólios e páginas de serviços para **qualquer cliente** em poucos minutos, com **hospedagem 100% gratuita** e máxima estabilidade.

---

## 📁 1. Como Personalizar para um Novo Cliente

Você **NÃO precisa mexer no código visual ou nos componentes**. Tudo o que você precisa está centralizado em um único arquivo:

👉 [`src/config/clientData.js`](file:///c:/Users/Cliente/Documents/portfolio/src/config/clientData.js)

Basta abrir esse arquivo e preencher:
1. **Dados do Cliente:** Nome, profissão, bio curta, foto/avatar e números de autoridade (anos de mercado, clientes atendidos).
2. **WhatsApp & Contatos:** Número com DDD (ex: `5511999999999`), e-mail, Instagram, etc.
3. **Serviços Prestados:** Título do serviço, descrição, ícone e lista de benefícios.
4. **Portfólio / Vitrine:** Fotos e títulos de trabalhos que o cliente já fez.
5. **Depoimentos & FAQ:** Opiniões de clientes e respostas para dúvidas frequentes.

Ao salvar esse arquivo, o site inteiro se adapta automaticamente!

---

## 💻 2. Como Testar e Visualizar no seu Computador

Para abrir o site localmente e ver as alterações na hora:

```bash
npm run dev
```

Abra no navegador o endereço exibido (normalmente `http://localhost:5173`).

---

## 🌐 3. Como Gerar o Link Grátis para o Cliente (Hospedagem 100% Gratuita)

### Opção 1: Vercel (Recomendado - 2 minutos)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Conecte sua conta do GitHub ou instale a CLI:
   ```bash
   npx vercel
   ```
3. A Vercel vai compilar o projeto e te dar um link seguro imediatamente:
   `https://nomedocliente.vercel.app`
4. Envie esse link para o cliente aprovar no celular dele!

### Opção 2: Cloudflare Pages / Netlify
- Funciona da mesma forma: basta conectar o repositório GitHub e o link é gerado na hora com CDN global de altíssima velocidade.

---

## 🛡️ 4. "E se o site cair e o cliente relatar? O que fazer?"

Sites estáticos hospedados na Vercel/Cloudflare **quase nunca caem** (eles não têm banco de dados ou servidor único; o conteúdo fica replicado em mais de 300 data centers no mundo). Porém, se um cliente mandar mensagem dizendo *"meu site não está abrindo"*, siga este checklist:

### Checklist Rápido de Diagnóstico:
1. **O problema é só no celular/Wi-Fi do cliente?**
   - Peça para ele testar no 4G/5G ou abra você mesmo o link. Na maioria das vezes é instabilidade na internet da operadora local do cliente.
2. **O domínio próprio venceu?**
   - Se o cliente usa `seunome.com.br`, verifique no [Registro.br](https://registro.br) se a anuidade de R$ 40 foi paga. Se o domínio expirar, o site para de responder.
3. **Houve alteração recente de código?**
   - Se você fez uma atualização e o site quebrou, a Vercel permite **Rollback Instantâneo**: com 1 clique no painel da Vercel você volta para a versão que estava funcionando minutos atrás.

---

## 🤖 5. O Que a Inteligência Artificial (Eu) Pode Fazer por Você?

Se um cliente relatar problemas ou se você precisar de ajuda:

1. **Diagnóstico Imediato:** Você me manda a URL ou o erro relatado e eu testo a resposta HTTP, DNS e certificado SSL.
2. **Correção de Código & Build:** Se o build falhar após alguma modificação, eu leio os logs de erro, identifico o arquivo quebrado e corrijo o código na hora.
3. **Rollback de Segurança:** Posso restaurar a versão estável anterior em segundos.
4. **Criação de Novos Blocos:** Se o cliente pedir uma seção nova (ex: formulário de agendamento, galeria de vídeos, mapa do Google), eu programo e integro no template para você.
5. **Monitoramento Automático:** Podemos configurar juntos um monitor gratuito (ex: *UptimeRobot*) que testa o link a cada 5 minutos e avisa no seu e-mail ou Telegram antes mesmo do cliente notar qualquer instabilidade.
