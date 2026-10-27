
const shop = {
  name: "Jagan Dress",

  address:
    "Shop No. 113 and 114, Old Vivekananda Cloth Market, Korapadu Road, Proddatur, Andhra Pradesh - 516360.",

  phoneNumbers: [
    {
      display: "+91 70131 77037",
      link: "+917013177037"
    },
    {
      display: "+91 94919 49466",
      link: "+919491949466"
    }
  ],

  whatsappGroupLink:
    "https://chat.whatsapp.com/LraoN6avH3t9mQAX1YgyTI?s=cl&p=a&mlu=4&ilr=4&iam=2",

  instagramLink:
    "https://www.instagram.com/jagan_dresses_?srtk=MWt0cmJwZm82ZGdtNQ=="
};

// Show the current year in the footer.
document.getElementById("current-year").textContent =
  new Date().getFullYear();

// Update the browser tab title.
document.title = `${shop.name} | Men's & Women's Clothing`;

// Update the shop address.
document.getElementById("shop-address").textContent =
  shop.address;

// Update the Google Maps search link.
const mapLink = document.getElementById("map-link");

mapLink.href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(shop.address);

// Update both phone numbers.
const phoneLinks = document.querySelectorAll(".phone-link");

phoneLinks.forEach((link, index) => {
  const phone = shop.phoneNumbers[index];

  if (phone) {
    link.textContent = phone.display;
    link.href = `tel:${phone.link}`;
  }
});

// Update every WhatsApp group button.
const whatsappButtons = [
  document.getElementById("nav-whatsapp"),
  document.getElementById("whatsapp-group")
];

whatsappButtons.forEach((button) => {
  if (button && shop.whatsappGroupLink) {
    button.href = shop.whatsappGroupLink;
  }
});

// Update the Instagram link.
document.getElementById("instagram-link").href =
  shop.instagramLink;
