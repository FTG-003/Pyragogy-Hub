# Pyragogy - Sito Web Statico

Questo è il sito web statico di Pyragogy, progettato per essere ospitato su GitHub Pages o qualsiasi altro servizio di hosting statico.

## File presenti

- `index.html`: File HTML principale del sito
- `assets/`: Cartella contenente tutti gli asset necessari (CSS, JavaScript)

## Come utilizzare questi file

### Su GitHub Pages

1. Crea un repository su GitHub
2. Carica tutti i file presenti in questa cartella nel repository
3. Vai nelle impostazioni del repository, seleziona la scheda "Pages"
4. Nella sezione "Source", seleziona il ramo principale (main) e la cartella root
5. Salva. Il tuo sito sarà disponibile a `https://[username].github.io/[nome-repository]`

### Su altro hosting statico

Carica semplicemente tutti i file presenti in questa cartella sul tuo servizio di hosting.

## Struttura del sito

Il sito è costruito con React e exportato come HTML statico. Gli asset principali sono:

- `assets/index-[hash].css`: Foglio di stile principale
- `assets/index-[hash].js`: JavaScript principale

## Personalizzazione

Per modificare il sito, è consigliabile tornare al progetto React originale, apportare le modifiche necessarie e poi esportare nuovamente i file.