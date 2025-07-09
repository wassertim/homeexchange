const isProduction = process.env.ELEVENTY_ENV === "production";

module.exports = {
  title: {
    en: "HomeExchange Guide - Lindau Apartment"
  },
  description: {
    en: "Your comprehensive guide to our apartment in Lindau, Lake Constance"
  },
  url: isProduction ? "https://homeexchange-guide.example.com" : "http://localhost:8080",
  author: {
    name: "Maria & Tim",
    email: "contact@example.com"
  },
  defaultLanguage: "en",
  languages: {
    en: {
      code: "en",
      name: "English",
      flag: "🇺🇸"
    }
  },
  navigation: {
    en: [
      {
        text: "Welcome",
        url: "/en/"
      },
      {
        text: "House Rules",
        url: "/en/house-rules/"
      },
      {
        text: "Coffee Machine",
        url: "/en/coffee-machine/"
      },
      {
        text: "Departure",
        url: "/en/departure/"
      },
      {
        text: "Restaurants",
        url: "/en/restaurants/"
      },
      {
        text: "Transportation",
        url: "/en/transportation/"
      },
      {
        text: "Excursions",
        url: "/en/excursions/"
      },
      {
        text: "Waste & Recycling",
        url: "/en/garbage/"
      },
      {
        text: "Troubleshooting",
        url: "/en/troubleshooting/"
      },
      {
        text: "Emergency",
        url: "/en/emergency/"
      }
    ]
  },
  buildTime: new Date()
};