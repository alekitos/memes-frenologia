const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://alekitos.github.io",
  "baseurl": "/memes-frenologia",
  "title": "Mandíbulas Morales",
  "subtitle": "Sobre la reórica visual frenológica en memes",
  "credits": "Alek Aune COnrad, 2024",
  "copyright": "Todos los derechos reservados, 2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "pid",
        "label": "Pid",
        "type": "text"
      },
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
      "subcollection",
      "autor",
      "year",
      "moral"
    ]
  }
};
export default config;