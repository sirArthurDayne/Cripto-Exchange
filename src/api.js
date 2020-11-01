const url = "https://api.coincap.io/v2";

const getAssets = async () => {
    let response = await fetch(`${url}/assets?limit=20`);
    response = await response.json();
    return response.data;
};

const getDetails = async coin => {
    let response = await fetch(`${url}/assets/${coin}`);
    response = await response.json();
    return response.data;
};

// function getHistory(coin) {
//     const now = new Date();
//     const end = now.getTime();
//     now.setDate(now.getDate() - 1);
//     const start = now.getTime();

//     return fetch(
//         `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
//     )
//         .then(response => response.json())
//         .then(response => response.data);
// }

const getHistory = async coin => {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate() - 1);
    const start = now.getTime();

    let response = await fetch(
         `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    response = await response.json();
    return response.data;
}

const getMarkets = async coin => {
    let response = await fetch(`${url}/assets/${coin}/markets?limit=10`);
    response = await response.json();
    return response.data;
};

const getExchange = async id => {
    let response = await fetch(`${url}/exchanges/${id}`);
    response = await response.json();
    return response.data;
};

export default { getAssets, getDetails, getHistory, getMarkets, getExchange };
