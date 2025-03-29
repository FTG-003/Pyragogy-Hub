#!/bin/bash

# Crea la struttura delle cartelle
mkdir -p pyragogy-export/docs/assets

# Copia i file
cp docs/index.html pyragogy-export/docs/
cp docs/assets/index-CXyGvEL2.js pyragogy-export/docs/assets/
cp docs/assets/index-DWTn3dg9.css pyragogy-export/docs/assets/

# Aggiungi un README con istruzioni
cat > pyragogy-export/README.md << 'EOF'
# Pyragogy Website

Questo pacchetto contiene i file statici del sito web Pyragogy, pronti per essere caricati su GitHub Pages.

## Istruzioni per il deployment

1. Crea un repository su GitHub (se non lo hai già fatto)
2. Carica questi file sul repository
3. Nelle impostazioni del repository, attiva GitHub Pages selezionando il branch "main" e la cartella "/docs"
4. Il sito sarà pubblicato all'indirizzo: https://tuousername.github.io/nome-repository/

## Struttura dei file

- docs/
  - index.html
  - assets/
    - index-CXyGvEL2.js
    - index-DWTn3dg9.css

## Nota

Per aggiungere o modificare le immagini, creale nella cartella `docs/assets/images/`.
EOF

echo "File esportati con successo nella cartella pyragogy-export"
echo "Puoi scaricare questa cartella dal file browser di Replit"