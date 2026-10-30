# AnnaFinder

Dov'è Anna? AnnaFinder mostra su un globo la posizione della rompighiaccio da ricerca **Laura Bassi** (OGS, IMO 9114256, MMSI 247405400), con uno spillo piantato sul punto in cui si trova la nave.

## Cosa c'è nella pagina

- Un globo da girare col mouse o col dito. Lo zoom si fa con la rotella o con i pulsanti + e −.
- Uno spillo sull'ultima posizione AIS pubblica della nave.
- La rotta già percorsa in rosso e quella prevista a puntini, fino all'Antartide.
- Le tappe del viaggio, la distanza dalla prossima tappa e da Trieste, l'ora a bordo.
- "Segui la rotta", che fa volare il globo su tutte le tappe, e "Fai ciao ad Anna".

## File

| File | Cosa contiene |
| --- | --- |
| `index.html` | La pagina: globo, spillo, pannello. Contiene già la mappa del mondo. |
| `position.js` | Solo la posizione della nave: ultimo segnale, rotta percorsa, zona di mare, fonti. |

Per spostare lo spillo basta aggiornare `position.js`. Il campo `ship` è l'ultima posizione e il campo `track` contiene i punti già percorsi, dal più vecchio. `area` e `where` sono il nome della zona di mare, senza e con la preposizione ("Oceano Atlantico", "nell'Oceano Atlantico"). Le tappe e la rotta prevista si aggiornano da sole in base alla posizione.

## Aprirla

Basta aprire `index.html` in un browser, anche in locale, oppure pubblicarla con GitHub Pages. La pagina carica d3 da cdnjs e i caratteri da Google Fonts.

## Dati

- Posizione della nave: dati AIS pubblici (ShipInfo, MaritimeOptima). I siti gratuiti hanno qualche ora di ritardo.
- Per la posizione in tempo reale e la webcam di prua: [laurabassi.ogs.it](https://laurabassi.ogs.it/).
- Mappa del mondo: [Natural Earth](https://www.naturalearthdata.com/), 1:110m, di pubblico dominio.
- Globo disegnato con [d3-geo](https://d3js.org/).
