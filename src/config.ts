export const SITE = {
  website: "https://adz.ph/", // replace this with your deployed domain
  author: "ADZ Realty and Brokerage",
  profile: "https://facebook.com/adzph",
  desc: "A simple real estate website for the modern Cebu",
  title: "ADZ Realty and Brokerage",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Manila", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
