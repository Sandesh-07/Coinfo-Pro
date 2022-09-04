var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking0c2d35e3e57cb315788e2cdfe13969539898039d5cfa64bb"


fetch(`${proxyUrl}${baseUrl}`,{
    method: "GET",
    headers: {
        'Content-Type':'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response)=>{
    if(response.ok){
        response.json().then((json)=>{
            console.log(json.data.coins)
            let coinsData = json.data.coins
            if(coinsData.length > 0){
                var cryptoCoins = " "
            }
            coinsData.forEach(coins => {
                cryptoCoins += " <tr>"
                cryptoCoins += `<td> ${coins.rank} </td>`;
                cryptoCoins += `<td><img src=" ${coins.iconUrl}" height="25" width="25"/></td>`;
                cryptoCoins += `<td> ${coins.name} </td>`;
                cryptoCoins += `<td>$${Math.round(coins.price)}</td>`;
                cryptoCoins += `<td> ${coins.symbol} </td>`;"<tr>";
                cryptoCoins += `<td> ${Math.floor(coins.marketCap /1000000000)+' Billion'} </td>`;
            })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error)=>{
    console.log(error)
})