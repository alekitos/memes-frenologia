const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://alekitos.github.io",
  "baseurl": "/frenologia-memes",
  "title": "Mandíbulas Morales",
  "subtitle": "Sobre la iconografía y la retórica visual frenológica e en memes ",
  "credits": "Po Alek Aune Conrad, 2024",
  "copyright": "Para uso abierto. ",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "collection",
        "label": "Collection",
        "type": "text"
      },
      {
        "key": "subcollection",
        "label": "Subcollection",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "year",
        "label": "Year",
        "type": "text"
      },
      {
        "key": "moral",
        "label": "Moral",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "collection",
      "subcollection",
      "autor",
      "year",
      "moral",
      "link"
    ]
  }
};
export default config;