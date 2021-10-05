window.onload = function (){

    const form = document.querySelector('.form_quizz');
    let tableauResultats = [];
    const reponses = ['c', 'a', 'b', 'a', 'c'];
    const emoji = ['✔️','⭐', '👀', '🥺','👍' ];
    const titreResultat = document.querySelector ('.resultats h2');
    const noteResultat = document.querySelector ('.note');
    const aideResultat = document.querySelector ('.aide');
    const toutesLesQuestions = document.querySelectorAll ('.question_block');
    let veriTableau = []; // que des true ou false en fonction des reponses



        // recupere l'evenement de selection de form boutton validez
    form.addEventListener ('submit', (e) => {    // fonction fléchée
        e.preventDefault ();                     // annule 

        for (let i = 1; i < 6; i++) {
            tableauResultats.push (document.querySelector  (`input[name="q${i}"]:checked`).value) // template litteral qui fait reference a i
        }
        verifFunc(tableauResultats);
        tableauResultats = [];
    })

    function verifFunc(tabResultat) {
        for (let a = 0; a < 5; a++) {
            if(tabResultat[a] === reponses[a]){  // compare les bonnes reponses
                veriTableau.push(true);          // rempli le tableau veritableau 
            }else{
                veriTableau.push(false);
            } 
        }
        console.log(veriTableau);
        afficherResultat (veriTableau);
        couleurFonction (veriTableau);
        veriTableau = [];                          // reinitialise veritableau pour eviter le remplissage a chaque click
    }

    function afficherResultat(tabCheck) {
        const nbDeFautes = tabCheck.filter(element => element !== true).length; // filter filtre les elements du tableau (tout les elements != true)
        console.log (nbDeFautes); // retourne un tableau avec le nb de fautes  

        switch (nbDeFautes) {
            case 0:
                titreResultat.innerText = " ✔️ Bravo, c'est un sans faute! ✔️";
                aideResultat.innerText = "";
                noteResultat.innerText = "5/5";
                break;
            case 1:
                titreResultat.innerText = " ⭐ Vous y etes presque! ⭐";
                aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
                noteResultat.innerText = "4/5";
                break;
            case 2:
                titreResultat.innerText = " ⭐ Encore un effort... 👀";
                aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
                noteResultat.innerText = "3/5";
                break;
            case 3:
                titreResultat.innerText = " 👀 Il reste quelques erreurs. 🥺";
                aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
                noteResultat.innerText = "2/5";
                break;
            case 4:
                titreResultat.innerText = " 🥺 Peux mieux faire !  🥺";
                aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
                noteResultat.innerText = "1/5";
                break;
            case 5:
                titreResultat.innerText = " 👍 Peux mieux faire ! 👍";
                aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
                noteResultat.innerText = "0/5";
                break;
                default:
                    "cas innatendu."
        }
    }

    function couleurFonction(tabVal) {
        for (let i = 0; i < tabVal.length; i++) {
            if (tabVal[i] === true) {
                toutesLesQuestions[i].style.background = "lightgreen";
            }else{
                toutesLesQuestions[i].style.background = "#ffb8b8";
                toutesLesQuestions[i].classList.add ("echec");              // accede a la class css echec

                setTimeout (() =>{                                          // fonction fléchée anonyme
                toutesLesQuestions[i].classList.remove ("echec");           // permet d'enlever l'animation au bout de 0.5sec
                },500)
            }
            
        }
    }

    toutesLesQuestions.forEach (item => {        // methode qui va appliquer une fonction sur chaque item d'un tableau
        item.addEventListener("click", ()=>{     // ecoute evenement click pour repasser en blanc
            item.style.background = "white";
        })
    })
};