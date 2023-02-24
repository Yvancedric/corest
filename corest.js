
alertInvite = () => {
    let text= "";
    let person = prompt("Entrez votre Prenom: ");
    if(person == "null" || person == "") {
        text = "Cet utilisateur a annulé!";
    } else {
        text = person + " Comment allez vous?";
    }
}

search = () => {
    alert("Vous serez informé pour bientôt");
}

isCall = () => {
    alert("Veuillez appéler sur ce numero: ");
}

myEmailConnect = () => {
    let email = document.getElementById("email").value;
    if(email == "") {
        alert("Veuillez le remplir");
    } else {
        alert ("Votre Email a été soumis.");
    }
}

getHappy = () => {
    window.location.assign("https://fr.wikipedia.org/wiki/France");
}

getContact = () =>{
    alert("Appelez sur ce numero: à vénir");
}

getDestin = () =>{
    alert('Destinations Côte d\'ivoire');
}

const mytext = document.getElementById("mytext");
mytext.style.color = "#4450f5";