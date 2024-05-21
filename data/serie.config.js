const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://alekitos.github.io",
  "baseurl": "/memes-frenologia",
  "title": "Mandíbulas Morales",
  "subtitle": "Iconografía y Retórica Visual Frenológica en Memes",
  "credits": "Por Alek Aune Conrad.",
  "copyright": "Para el uso público y abierto.",
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
      "label",
      "title",
      "subcollection",
      "autor",
      "year",
      "moral"
    ]
  }
};
export default config;