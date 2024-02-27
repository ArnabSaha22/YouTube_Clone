export const HAMBURGER_ICON =
  "https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png";

export const YOUTUBE_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu6ESGB-jfaowRZvcLVA3Xv72GY15Gjo9kg&usqp=CAU";

export const MIC_ICON =
  "https://static.vecteezy.com/system/resources/previews/000/420/512/non_2x/microphone-icon-vector-illustration.jpg";

export const GREYLINE_IMG =
  "https://icones.pro/wp-content/uploads/2021/04/icone-trait-gris.png";

export const ScrollOptionsList = [
  "All",
  "Mixes",
  "Computer Science",
  "AI",
  "Startups",
  "Podcasts",
  "Musics",
  "Stocks",
  "Trailers",
  "Games",
  "Live",
  "Recently Played",
  "Watched",
  "New to You",
  "Sports",
];

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API = "/complete/search?client=youtube&ds=yt&client=chrome&hl=en&q=";
  //"https://cors-anywhere.herokuapp.com/https://clients1.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_API2 = "https://www.youtube.com/results?search_query=";
