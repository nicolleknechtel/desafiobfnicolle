document.getElementById("clickMe").onclick = function ()
{ 
 
let nome= document.getElementById('nome').value;
let email= document.getElementById('email').value;

let data ={
  nome,
  email,
}
let convertData = JSON.stringify(data);

localStorage.setItem('lead', convertData)

alert('Dados cadastrados com sucesso!')
}
