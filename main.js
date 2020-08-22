// DOM Manipulation
const quoteContainer = document.getElementById('quote-container');
const quoteTextTam01 = document.getElementById('quotetamil-1');
const quoteTextTam02 = document.getElementById('quotetamil-2');
const quoteTextTrn = document.getElementById('quote-text-trn');
const twitterBtn = document.getElementById('twitter');
const nextKural = document.getElementById('next-kural');

// async method and await 
async function getKural(){
    const appId = 'eenoesvbwbika';
    let apiUrl = 'https://getthirukkural.appspot.com/api/2.0/kural/rnd?appid={appid}&format=json';
    apiUrl = apiUrl.replace("{appid}", appId);
    
    try{
        const response = await fetch (apiUrl);
        const data = await response.json();
        quoteTextTam01.innerText = data.KuralSet.Kural[0].Line1;
        quoteTextTam02.innerText = data.KuralSet.Kural[0].Line2;
        quoteTextTrn.innerText = data.KuralSet.Kural[0].Translation;
        //console.log(data.KuralSet.Kural[0].Line1);
        
    }catch(error){
        console.log('Error message ' ,error);
        getKural();
    }
}
// Adding event Listeners
nextKural.addEventListener('click',getKural);

//Call getKural function
getKural();