let flecheDroite = document.querySelector('.droite')
let barre = document.querySelector('.barrechar')
let textArray = [
    {
        title : 'Shingeki No Kyjoin',
        descri: "Le Titan assaillant, Il est prépublié entre septembre 2009 et avril 2021 dans le magazine Bessatsu Shōnen Magazine puis compilé en trente-quatre volumes reliés par l'éditeur Kōdansha.",
        pic : "PIC/SNK.jpg"
    },
    {
        title : 'Kimetsu No Yaiba',
        descri: "L'histoire suit le périple de Kamado Tanjirō qui cherche un moyen de rendre à nouveau humaine sa petite sœur Nezuko après sa transformation en démon. est compilé en un total de 23 tomes.",
        pic : "PIC/KNY.jpg"
    },
    {
        title : 'Tokyo Revengers',
        descri: "À 26 ans, Takemichi a le sentiment d'avoir déjà raté sa vie. Vivotant de petits boulots ingrats tout juste bons à payer le loyer d'un studio miteux, il se lamente sur le désert de sa vie amoureuse lorsqu'il apprend la mort de Hinata, la seule petite amie ...",
        pic : "PIC/TR.jpg"
    }
]

let para = document.querySelector('p')
let image = document.querySelector('img')
let titre = document.querySelector('h1')
let rightPoz = document.querySelector('img').style.right
let i = 0

function increr() {
    console.log(i)
    if (i >= 2) {
        return;
    }
    i++
    titre.textContent = textArray[i].title
    para.textContent = textArray[i].descri
    setTimeout(() => {
        image.src = textArray[i].pic
    }, 500);
    document.querySelector('img').style.right = 50 +'px'
    document.querySelector('img').style.opacity = '0%'
    setTimeout(() => {
    document.querySelector('img').style.right = 400 +'px'
    }, 100);
    setTimeout(() => {
    document.querySelector('img').style.right = 200 +'px'
    document.querySelector('img').style.opacity = '100%'
    }, 600);

}
function decrer() {
    console.log(i)
    if (i <=0) {
        return;
    }
    i--
    titre.textContent = textArray[i].title
    para.textContent = textArray[i].descri
    image.src = textArray[i].pic
    
}

document.querySelector('.droite').addEventListener('click', increr)
document.querySelector('.left').addEventListener('click', decrer)

