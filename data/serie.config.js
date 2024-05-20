const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://alekitos.github.io",
  "baseurl": "/memes-frenologia",
  "title": "Mandíbulas Morales",
  "subtitle": "Sobre la retórica visual frenológica en memes ",
  "credits": "por Alek Aune ",
  "copyright": "Todos los derechos reservados, 2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "title",
        "label": "Title",
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
      },
      {
        "key": "link",
        "label": "Link",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "pid",
      "label",
      "title",
      "subcollection",
      "autor",
      "year",
      "moral",
      "link"
    ]
  }
};
export default config;