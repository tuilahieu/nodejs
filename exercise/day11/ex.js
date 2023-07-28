const API_URL = "https://api.shrtco.de/v2/shorten?url=";

const getShortenUrl = async (url) => {
  const response = await fetch(`${API_URL}${url}`);
  const data = await response.json();
  if (!data.ok) {
    console.log(data.error);
    return;
  }

  const shortenUrl1 = data.result.full_short_link;
  const shortenUrl2 = data.result.full_short_link2;
  const shortenUrl3 = data.result.full_short_link3;

  console.log("link 1: ", shortenUrl1);
  console.log("link 2: ", shortenUrl2);
  console.log("link 3: ", shortenUrl3);
};

getShortenUrl("https://example.com");
