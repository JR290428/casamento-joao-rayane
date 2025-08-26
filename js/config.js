/* === CONFIGURAÇÕES EDITÁVEIS === */
window.SITE = {
  coupleNames: "João Vitor & Rayane",
  weddingDateISO: "2028-04-29T14:30:00-03:00", // início oficial (Cerimônia)
  ceremonyTime: "14:30",
  brunchTime: "16:30",
  afterTime: "20:00",
  rsvpDeadline: "20/03/2028",
  dressCode: "Esporte fino",

  venueName: "Local da Cerimônia",
  venueAddress: "Endereço completo",
  // Cole aqui o src do iframe do Google Maps:
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=PASTE_AQUI...",

  // PIX (sem taxa) — preencha depois
  pixKey: "",
  pixBeneficiary: "João Vitor e Rayane",
  pixCity: "SAO PAULO",
  giftMessageDefault: "Com carinho para os noivos 💜",

  // Lista de presentes com links
  giftLinks: [
    { name: "Cota Lua de Mel", url: "#"},
    { name: "Jantar especial", url: "#"},
    { name: "Decoração da casa", url: "#"}
  ],
  // Cotas sugeridas
  giftSuggestions: [
    { label: "Lua de Mel", value: 200 },
    { label: "Jantar especial", value: 150 },
    { label: "Casa nova", value: 100 }
  ],
  // Provedores para pagamento com cartão (links externos)
  cardProviders: [
    { name: "PagSeguro", url: "https://pagseguro.uol.com.br/" },
    { name: "Mercado Pago", url: "https://www.mercadopago.com.br/" }
  ],

  // Cronograma (exibido em Cronograma)
  timeline: [
    { time: "14:30", event: "Cerimônia" },
    { time: "16:30", event: "Brunch" },
    { time: "20:00", event: "After 🎶" }
  ],

  // Lista de convidados (para busca de RSVP)
  GUESTS: [
    "Convidado 1",
    "Convidado 2",
    "Família Silva",
    "Amigos da Faculdade"
  ],

  // Integração Google Sheets (opcional)
  // Depois de publicar seu Web App do Google Apps Script, cole aqui:
  googleSheetsWebAppUrl: ""
};
