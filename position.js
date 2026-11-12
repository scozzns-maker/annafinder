/* AnnaFinder: posizione della N/R Laura Bassi (IMO 9114256, MMSI 247405400).
   Questo file viene aggiornato ogni giorno.
   ship  = ultima posizione AIS pubblica (fix in UTC, speed in nodi, course in gradi)
   area  = nome del mare/oceano/porto attuale; where = la stessa cosa con la preposizione ("nell'Oceano Atlantico")
   track = punti già percorsi dopo il Mediterraneo centrale, dal più vecchio: [lon, lat, fix UTC oppure null se è solo un punto di passaggio]
   sources = siti da cui viene la posizione */
window.ANNA = {
  "ship": { "lon": -55.15754, "lat": 17.70602, "fix": "2026-11-11T11:26:00Z", "speed": 12.2, "course": 254 },
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
    [-15.20110, 32.87498, "2026-10-30T18:35:00Z"],
    [-15.38664, 32.75887, "2026-10-30T19:45:00Z"],
    [-15.75651, 32.52431, "2026-10-30T22:09:00Z"],
    [-16.19000, 32.23796, "2026-10-31T00:57:00Z"],
    [-16.48004, 32.05004, "2026-10-31T03:31:00Z"],
    [-17.74884, 32.04269, "2026-10-31T20:33:00Z"],
    [-29.86604, 31.40111, "2026-11-03T02:12:00Z"],
    [-30.62731, 31.23643, "2026-11-03T19:17:00Z"],
    [-34.38933, 29.64909, "2026-11-04T17:15:00Z"],
    [-37.88795, 28.01118, "2026-11-05T14:37:00Z"],
    [-38.74324, 27.57396, "2026-11-06T05:13:00Z"],
    [-40.70345, 26.49083, "2026-11-06T17:25:00Z"],
    [-42.49395, 25.49803, "2026-11-07T14:28:00Z"],
    [-47.14479, 21.19276, "2026-11-08T20:58:00Z"],
    [-48.23071, 20.00065, "2026-11-09T05:53:00Z"],
    [-49.20961, 19.53520, "2026-11-09T16:22:00Z"],
    [-49.39383, 19.46538, "2026-11-09T17:27:00Z"],
    [-52.72047, 18.39019, "2026-11-10T11:23:00Z"]
  ],
  "sources": "ShipInfo"
};
