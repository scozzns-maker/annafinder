/* AnnaFinder: posizione della N/R Laura Bassi (IMO 9114256, MMSI 247405400).
   Questo file viene aggiornato ogni giorno.
   ship  = ultima posizione AIS pubblica (fix in UTC, speed in nodi, course in gradi)
   area  = nome del mare/oceano/porto attuale; where = la stessa cosa con la preposizione ("nell'Oceano Atlantico")
   track = punti già percorsi dopo il Mediterraneo centrale, dal più vecchio: [lon, lat, fix UTC oppure null se è solo un punto di passaggio]
   sources = siti da cui viene la posizione */
window.ANNA = {
  "ship": { "lon": -15.38664, "lat": 32.75887, "fix": "2026-10-30T19:45:00Z", "speed": 9.9, "course": 233 },
  "area": "Oceano Atlantico",
  "where": "nell'Oceano Atlantico",
  "track": [
    [3.15342, 37.98467, "2026-10-26T09:22:00Z"],
    [-2.0, 36.4, null],
    [-5.6, 35.95, null],
    [-7.0, 35.8, null],
    [-12.55934, 34.55975, "2026-10-30T00:37:00Z"],
    [-13.68971, 33.88948, "2026-10-30T09:19:00Z"],
    [-14.61566, 33.29458, "2026-10-30T14:41:00Z"],
    [-15.20110, 32.87498, "2026-10-30T18:35:00Z"]
  ],
  "sources": "ShipInfo e MaritimeOptima"
};
