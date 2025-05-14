"use strict";

// Helper function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Data for generating user agents
const androidVersions = ["10", "11", "12", "13", "14"]; // Minimum Android 10
const iosVersions = ["17_0", "17_1", "17_2", "17_3", "17_4", "17_5"]; // Minimum iOS 17

const androidDevices = [
    // Samsung
    "SM-G991B", // Galaxy S21
    "SM-G981B", // Galaxy S20
    "SM-S901B", // Galaxy S22
    "SM-S911B", // Galaxy S23
    "SM-S921B", // Galaxy S24
    "SM-A525F", // Galaxy A52
    "SM-A536B", // Galaxy A53
    "SM-A546B", // Galaxy A54
    "SM-A325F", // Galaxy A32
    "SM-A336E", // Galaxy A33
    "SM-A346E", // Galaxy A34
    "SM-M315F", // Galaxy M31
    "SM-M515F", // Galaxy M51
    "SM-F711B", // Galaxy Z Flip3
    "SM-F926B", // Galaxy Z Fold3
    "SM-T500",  // Galaxy Tab A7
    "SM-T736B", // Galaxy Tab S7 FE
    "SM-X200",  // Galaxy Tab A8
    "SM-X900",  // Galaxy Tab S8 Ultra
    "SM-G780F", // Galaxy S20 FE
    "SM-G973F", // Galaxy S10
    "SM-N975F", // Galaxy Note 10+
    "SM-A125F", // Galaxy A12
    "SM-A037F", // Galaxy A03s
    "SM-E426B", // Galaxy F42 5G
    "SM-M215F", // Galaxy M21
    "SM-M426B", // Galaxy M42 5G
    "SM-F700F", // Galaxy Z Flip
    "SM-F900F", // Galaxy Fold
    "SM-T225",  // Galaxy Tab A7 Lite
    "SM-T870",  // Galaxy Tab S7
    "SM-P615",  // Galaxy Tab S6 Lite
    "SM-A725F", // Galaxy A72
    "SM-A826S", // Galaxy Quantum 2
    "SM-G998B", // Galaxy S21 Ultra
    "SM-S908B", // Galaxy S22 Ultra
    "SM-S918B", // Galaxy S23 Ultra
    "SM-S928B", // Galaxy S24 Ultra
    "SM-A045F", // Galaxy A04
    "SM-A055F", // Galaxy A05
    "SM-A135F", // Galaxy A13
    "SM-A145F", // Galaxy A14
    "SM-A156B", // Galaxy A15 5G
    "SM-A235F", // Galaxy A23
    "SM-A245F", // Galaxy A24
    "SM-A256B", // Galaxy A25 5G
    "SM-A356B", // Galaxy A35 5G
    "SM-A556B", // Galaxy A55 5G
    "SM-M146B", // Galaxy M14 5G
    "SM-M346B", // Galaxy M34 5G
    "SM-M446B", // Galaxy M44 5G
    "SM-M546B", // Galaxy M54 5G
    "SM-F731B", // Galaxy Z Flip5
    "SM-F946B", // Galaxy Z Fold5
    "SM-X500",  // Galaxy Tab S8
    "SM-X600",  // Galaxy Tab S8+
    "SM-X700",  // Galaxy Tab S8
    "SM-X710",  // Galaxy Tab S9
    "SM-X810",  // Galaxy Tab S9+
    "SM-X910",  // Galaxy Tab S9 Ultra
    "SM-X110",  // Galaxy Tab A9
    "SM-X210",  // Galaxy Tab A9+

    // Google Pixel
    "Pixel 6",
    "Pixel 6 Pro",
    "Pixel 6a",
    "Pixel 7",
    "Pixel 7 Pro",
    "Pixel 7a",
    "Pixel 8",
    "Pixel 8 Pro",
    "Pixel 8a",
    "Pixel Fold",
    "Pixel Tablet",

    // OnePlus
    "ONEPLUS A6003", // OnePlus 6
    "KB2003", // OnePlus 8T
    "LE2123", // OnePlus 9 Pro
    "NE2213", // OnePlus 10 Pro
    "PGP110", // OnePlus 11
    "CPH2447", // OnePlus 11R
    "CPH2513", // OnePlus 12
    "CPH2613", // OnePlus 12R
    "CPH2381", // OnePlus Nord 2T
    "CPH2451", // OnePlus Nord 3
    "CPH2609", // OnePlus Nord CE 4
    "CPH2465", // OnePlus Nord CE 3 Lite

    // Oppo
    "CPH2207", // Oppo Reno5 5G
    "CPH2247", // Oppo Reno6 5G
    "CPH2371", // Oppo Reno7 5G
    "CPH2457", // Oppo Reno8 5G
    "CPH2505", // Oppo Reno10 5G
    "CPH2511", // Oppo Reno11 5G
    "CPH2309", // Oppo Find X5 Pro
    "CPH2521", // Oppo Find X6 Pro
    "CPH2525", // Oppo Find X7 Ultra
    "CPH2493", // Oppo A77 5G
    "CPH2579", // Oppo A78 5G
    "CPH2577", // Oppo A98 5G
    "CPH2483", // Oppo A17
    "CPH2575", // Oppo A18
    "CPH2591", // Oppo A38

    // Xiaomi / Redmi / POCO
    "M2102J20SG", // Mi 11
    "2201122G",   // Xiaomi 12 Pro
    "2202121C",   // Xiaomi 12
    "2304FPN6DC", // Xiaomi 13
    "2311DRK48C", // Xiaomi 14
    "2106118C",   // Mi 11 Ultra
    "22081212C",  // Xiaomi 12T Pro
    "23078PND5G", // Xiaomi 13T Pro
    "2312FPCA6G", // Xiaomi 14 Ultra
    "M2101K6G",   // Redmi Note 10 Pro
    "2201116PG",  // Redmi Note 11 Pro 5G
    "22101316G",  // Redmi Note 12 Pro+ 5G
    "2312DRA50G", // Redmi Note 13 Pro+ 5G
    "23090RA98G", // Redmi 13C
    "2310FPB4G",  // Redmi Note 13 5G
    "M2012K11AG", // POCO X3 Pro
    "22021211RG", // POCO X4 Pro 5G
    "22101320G",  // POCO X5 Pro 5G
    "2311DRSN5G", // POCO X6 Pro 5G
    "22071219CG", // POCO F4
    "2304FMBP5G", // POCO F5 Pro
    "23116PN5BC", // POCO F6 Pro
    "2203129G",   // POCO M4 Pro 5G
    "23076PCBCG", // POCO M6 Pro 5G

    // Realme
    "RMX3031", // Realme 8 Pro
    "RMX3363", // Realme GT Master Edition
    "RMX3301", // Realme GT 2 Pro
    "RMX3560", // Realme GT Neo 3
    "RMX3706", // Realme 11 Pro+ 5G
    "RMX3741", // Realme 12 Pro+ 5G
    "RMX3511", // Realme C35
    "RMX3630", // Realme C55
    "RMX3842", // Realme 12+ 5G
    "RMX3840", // Realme GT 5 Pro

    // Asus
    "ASUS_I005D", // ROG Phone 5
    "ASUS_I007D", // ROG Phone 6
    "ASUS_AI2202", // ROG Phone 7
    "ASUS_AI2401", // ROG Phone 8 Pro
    "ASUS_I013D", // Zenfone 8
    "ASUS_AI2202", // Zenfone 9
    "ASUS_AI2302", // Zenfone 10

    // Vivo
    "V2027", // Vivo V20
    "V2109", // Vivo V21 5G
    "V2130", // Vivo V23 5G
    "V2203", // Vivo V25 5G
    "V2245", // Vivo V27 5G
    "V2314", // Vivo V30 5G
    "V2050", // Vivo X60 Pro
    "V2145", // Vivo X70 Pro
    "V2185A", // Vivo X80 Pro
    "V2242A", // Vivo X90 Pro+
    "V2309A", // Vivo X100 Pro
    "V2324A", // Vivo X Fold3 Pro
    "V2330", // Vivo Y27 5G
    "V2302", // Vivo Y100 5G

    // Infinix
    "X6816", // Infinix Note 11
    "X676",  // Infinix Note 12 Pro 5G
    "X6711", // Infinix Note 30 Pro
    "X678B", // Infinix Note 40 Pro+ 5G
    "X665",  // Infinix Hot 11S
    "X6716", // Infinix Hot 30
    "X6837", // Infinix Hot 40 Pro
    "X6819", // Infinix Zero 5G
    "X6731", // Infinix Zero X Pro
    "X6721", // Infinix Zero Ultra

    // Tecno
    "KG7n",  // Tecno Spark 8C
    "KG5k",  // Tecno Spark 10 Pro
    "KJ5",   // Tecno Spark 20 Pro+
    "CH7n",  // Tecno Camon 18 Premier
    "CH7a",  // Tecno Camon 19 Pro 5G
    "CH7n",  // Tecno Camon 20 Pro 5G
    "CL8",   // Tecno Camon 30 Pro 5G
    "AD8",   // Tecno Pova 5 Pro 5G
    "AD10",  // Tecno Pova 6 Pro 5G
    "CP7a",  // Tecno Phantom X2 Pro 5G
    "AD11",  // Tecno Phantom V Fold
    "AD12",  // Tecno Phantom V Flip
    "AD13",  // Tecno Phantom X3 Pro 5G

    // Other common devices
    "Pixel 6",
    "Pixel 7",
    "Pixel 8",
    "ONEPLUS A6003", // OnePlus 6
    "KB2003", // OnePlus 8T
    "CPH2207" // Oppo Reno5 5G
];

const iosDevices = ["iPhone", "iPad"];

// Recent browser versions (approximate)
const chromeVersions = [
    "120.0.6099.103", "121.0.6167.101", "122.0.6261.69",
    "123.0.6312.52", "124.0.6367.60", "125.0.6422.60"
];
const firefoxVersions = [
    "120.0", "121.0", "122.0", "123.0", "124.0", "125.0"
];
const safariVersions = [
    "17.0", "17.1", "17.2", "17.3", "17.4", "17.5" // Often matches iOS version
];
const webkitVersions = ["605.1.15"]; // Common for recent iOS
const buildIds = [
    "21A329", // iOS 17.0
    "21B74",  // iOS 17.1
    "21C62",  // iOS 17.2
    "21D61",  // iOS 17.3
    "21E236", // iOS 17.4
    "21F90"   // iOS 17.5
];

/**
 * Generates a random mobile user agent string for Android (>=10) or iOS (>=17).
 * @returns {string} A random user agent string.
 */
function randomUserAgent(category = 'Random') {
    const lowerCategory = category.toLowerCase();
    let osType;

    if (lowerCategory === 'android') {
        osType = 'android';
    } else if (lowerCategory === 'ios') {
        osType = 'ios';
    } else { // Default to random if category is 'Random' or anything else
        osType = getRandomElement(["android", "ios"]);
    }

    if (osType === "android") {
        const androidVersion = getRandomElement(androidVersions);
        const androidDevice = getRandomElement(androidDevices);
        const browserType = getRandomElement(["chrome", "firefox"]);

        if (browserType === "chrome") {
            const chromeVersion = getRandomElement(chromeVersions);
            return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${androidDevice}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36`;
        } else { // firefox
            const firefoxVersion = getRandomElement(firefoxVersions);
            const geckoDate = "20100101"; // Common placeholder or fixed value
            return `Mozilla/5.0 (Android ${androidVersion}; Mobile; rv:${firefoxVersion}) Gecko/${geckoDate} Firefox/${firefoxVersion}`;
        }

    } else { // ios
        const iosVersion = getRandomElement(iosVersions);
        const iosDevice = getRandomElement(iosDevices); // Usually iPhone or iPad
        const browserType = getRandomElement(["safari", "chrome"]);

        const webkitVersion = getRandomElement(webkitVersions);
        const buildId = getRandomElement(buildIds);

        // iOS version in UA is typically space-separated (e.g., 17 0)
        const formattedIosVersion = iosVersion.replace('_', ' ');

        if (browserType === "safari") {
            const safariVersion = getRandomElement(safariVersions);
            return `Mozilla/5.0 (${iosDevice}; CPU iPhone OS ${formattedIosVersion} like Mac OS X) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Version/${safariVersion} Mobile/${buildId} Safari/${webkitVersion}`;
        } else { // chrome
            const chromeVersion = getRandomElement(chromeVersions);
             return `Mozilla/5.0 (${iosDevice}; CPU iPhone OS ${formattedIosVersion} like Mac OS X) AppleWebKit/${webkitVersion} (KHTML, like Gecko) CriOS/${chromeVersion} Mobile/${buildId} Safari/${webkitVersion}`;
        }
    }
}

// Export the function for use as a module (CommonJS format)
module.exports = randomUserAgent;

