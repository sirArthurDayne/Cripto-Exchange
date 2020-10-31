
const url = "https://api.coincap.io/v2";

function getAssets() {
    return fetch(`${url}/assets?limit=20`)
        .then(response => response.json() )
        .then(response => response.data);
}

function getDetails(coin) {
    return fetch(`${url}/assets/${coin}`)
        .then(response => response.json() )
        .then(response => response.data);
}

function getHistory(coin) {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate() - 1);
    const start = now.getTime();

    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        .then(response => response.json())
        .then(response => response.data);
}

export default { getAssets, getDetails, getHistory };
