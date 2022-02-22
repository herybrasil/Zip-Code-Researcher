let zipcode = document.querySelector('#zipcode');
let street = document.querySelector('#street');
let neighborhood = document.querySelector('#neighborhood');
let city = document.querySelector('#city');
let state = document.querySelector('#state');


zipcode.value = '';

zipcode.addEventListener('blur', function(e){
    let zipcode = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+zipcode+'/json/?callback=popularForm';
    document.body.appendChild(script);

})


function popularForm(resposta){

    if("erro" in resposta){
        alert('Not found zip code!');
        return;
    }

    street.value = resposta.logradouro;
    neighborhood.value = resposta.bairro;
    city.value =  resposta.localidade;
    state.value = resposta.uf;



}