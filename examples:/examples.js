const randomUserAgent = require('../MobileUserAgent');
const fetch = global.fetch || require('node-fetch');

async function getIpChickenInfo() {
  //let AndroidUA = randomUserAgent('android');
  //let IosUA = randomUserAgent('ios');
  let RandomUA = randomUserAgent(); // or let RandomUA = randomUserAgent('random');

  try {
    const response = await fetch("https://ipchicken.com/", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6,zh;q=0.5",
        "user-agent": RandomUA,
        "upgrade-insecure-requests": "1"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Ekstraksi Name Address
    const nameAddressMatch = html.match(/Name\s+Address:\s+([\d.]+)/);
    const nameAddress = nameAddressMatch ? nameAddressMatch[1] : null;

    // Ekstraksi Remote Port
    const remotePortMatch = html.match(/Remote\s+Port:\s+(\d+)/);
    const remotePort = remotePortMatch ? remotePortMatch[1] : null;

    // Ekstraksi Browser
    const browserMatch = html.match(/Browser:\s+(.+?)<\/font>/);
    const browser = browserMatch ? browserMatch[1].trim() : null;

    console.log('Name Address:', nameAddress);
    console.log('Remote Port:', remotePort);
    console.log('Browser:', browser);

    return {
      nameAddress: nameAddress,
      remotePort: remotePort,
      browser: browser
    };

  } catch (error) {
    console.error('Error fetching or processing data:', error);
    return null;
  }
}

getIpChickenInfo();