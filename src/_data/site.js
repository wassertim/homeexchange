const isProduction = process.env.ELEVENTY_ENV === "production";

module.exports = {
  title: {
    en: "Thun"
  },
  description: {
    en: "Your guide to our home in Thun"
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
        text: "Restaurants",
        url: "/en/restaurants/"
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
        text: "Emergency",
        url: "/en/emergency/"
      }
    ]
  },
  buildTime: new Date()
};