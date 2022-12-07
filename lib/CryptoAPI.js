const https=require('https');
class CryptoAPI{
    constructor(apiKey){
        this.apiKey=apiKey;
    
    }
     async getPriceData(coinOption,curOption){
        try{
            var options = {
                "method": "GET",
                "hostname": "rest.coinapi.io",
                "path": `/v1/exchangerate/${coinOption}/${curOption}`,
                "headers": {'X-CoinAPI-Key': `${this.apiKey}`}
              };
              
               var request=https.request(options, function (response) {
                response.setEncoding('utf-8')
                var chunks = [];
                response.on("data", function (chunk) { 
                  chunks.push(chunk);
                  console.log(`Coin: ${chunks[0].slice(64,67).blue} || Currency: ${chunks[0].slice(91,94).yellow} || Rate: ${chunks[0].slice(107,125).green}`);
                  return chunks
                });
              });
              request.end()
            
           
            
        }catch(err){
            console.error(err)
        }
    }
}
module.exports=CryptoAPI