# PeeragogyBot – Flowise Deploy Branch

Questo branch contiene la configurazione minimale per eseguire Flowise su Render e integrare il PeeragogyBot nel sito GitHub Pages.

## 📦 Setup
1. Deploy su Render.com
2. Start command: `npx flowise start --config flowise.json`
3. Variabili ambiente:
   - `OPENAI_API_KEY`
   - `FLOWISE_USERNAME=admin`
   - `FLOWISE_PASSWORD=peerpower2025`
   - `PORT=10000`

## 🌍 Accesso:
`https://NOME-DEL-SERVIZIO.onrender.com`

## 🤖 Integrazione HTML:
```html
<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
  Chatbot.init({
    chatflowid: "IL_TUO_CHATFLOW_ID",
    apiHost: "https://NOME-DEL-SERVIZIO.onrender.com"
  })
</script>

