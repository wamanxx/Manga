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
var barreLarge = document.querySelector('.barrechar').style.width

function increr() {
    console.log(i)
    if (i >= 2) {
        return;
    }
    i++
    
    if (i == 2 ) {
        document.querySelectorAll('path')[8].style.fill = '#827B68'
        document.querySelectorAll('path')[7].style.fill = '#FFF38A'

    }else{
        document.querySelectorAll('path')[8].style.fill = '#FFF38A'
        document.querySelectorAll('path')[7].style.fill = '#FFF38A'

    }
    
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

    setTimeout(() => {
        para.textContent = textArray[i].descri
        titre.textContent = textArray[i].title
    }, 500);
    document.querySelector('p').style.opacity = '0%'
    document.querySelector('h1').style.opacity = '0%'
    setTimeout(() => {
    document.querySelector('p').style.opacity = '100%'
    document.querySelector('h1').style.opacity = '100%'
    }, 600);

    document.querySelector('.barrechar').style.width  = 47-23.5*i + "vw"
    console.log(barreLarge)

    document.querySelectorAll('circle')[i].style.fill = '#FFF38A'
    console.log(document.querySelectorAll('circle'))
// pour les nombres 

    if( i == 1)
        {
            document.querySelector('.n8').style.left = 500 + "px"
            document.querySelector('.n0').style.left = 640 + "px"
            setTimeout(() => {
            for (let j = 0; j < document.querySelectorAll('.n').length; j++) {
                document.querySelectorAll('.n')[j].style.transition = ' .2s ease-in';
                console.log(document.querySelectorAll('.n')[j].style.transition)
            }  
            }, 50);
            setTimeout(() => {
                document.querySelector('.n8').style.left = 360 + "px"
                document.querySelector('.n8').style.opacity = "100%"
                // pour les partant 
                document.querySelector('.n3').style.left = 360 + "px"
                document.querySelector('.n3').style.opacity = "0%"
            }, 300);
            setTimeout(() => {
                document.querySelector('.n0').style.left = 500 + "px"
                document.querySelector('.n0').style.opacity = "100%"
                document.querySelector('.n7').style.left = 220 + "px"
                document.querySelector('.n7').style.opacity = "0%"
            }, 470);
        }
        if( i == 2)
        {
            document.querySelector('.n3').style.left = 500 + "px"
            document.querySelector('.n7').style.left = 640 + "px"
            setTimeout(() => {
            for (let j = 0; j < document.querySelectorAll('.n').length; j++) {
                document.querySelectorAll('.n')[j].style.transition = ' .2s ease-in';
                console.log(document.querySelectorAll('.n')[j].style.transition)
            }  
            }, 50);
            setTimeout(() => {
                document.querySelector('.n3').style.left = 360 + "px"
                document.querySelector('.n3').style.opacity = "100%"
                // pour les partant 
                document.querySelector('.n0').style.left = 360 + "px"
                document.querySelector('.n0').style.opacity = "0%"
            }, 300);
            setTimeout(() => {
                document.querySelector('.n7').style.left = 500 + "px"
                document.querySelector('.n7').style.opacity = "100%"
                document.querySelector('.n8').style.left = 220 + "px"
                document.querySelector('.n8').style.opacity = "0%"
            }, 470);
        }
}
function decrer() {
    console.log(i)
    if (i <=0) {
        return;
    }
    i--

    
    if (i == 0 ) {
        document.querySelectorAll('path')[7].style.fill = '#827B68'
        document.querySelectorAll('path')[8].style.fill = '#FFF38A'
    }else{
        document.querySelectorAll('path')[7].style.fill = '#FFF38A'
        document.querySelectorAll('path')[8].style.fill = '#FFF38A'
    }

    setTimeout(() => {
        image.src = textArray[i].pic
    }, 500);
    document.querySelector('img').style.right = 50 +'px'
    document.querySelector('img').style.opacity = '0%'
    setTimeout(() => {
    document.querySelector('img').style.right = 200 +'px'
    }, 100);
    setTimeout(() => {
    document.querySelector('img').style.right = 200 +'px'
    document.querySelector('img').style.opacity = '100%'
    }, 600);
    
    setTimeout(() => {
        para.textContent = textArray[i].descri
        titre.textContent = textArray[i].title
    }, 500);
    document.querySelector('p').style.opacity = '0%'
    document.querySelector('h1').style.opacity = '0%'
    setTimeout(() => {
    document.querySelector('p').style.opacity = '100%'
    document.querySelector('h1').style.opacity = '100%'
    }, 600);
    document.querySelector('.barrechar').style.width  = 47-23.5*i + "vw"
    document.querySelectorAll('circle')[i+1].style.fill = '#827B68'
    console.log(document.querySelectorAll('circle'))
// pour les nombres 
    if( i == 1) {
        document.querySelector('.n8').style.left = 220 + "px"
        document.querySelector('.n0').style.left = 360 + "px"
        setTimeout(() => {
        for (let j = 0; j < document.querySelectorAll('.n').length; j++) {
            document.querySelectorAll('.n')[j].style.transition = ' .2s ease-in';
            console.log(document.querySelectorAll('.n')[j].style.transition)
        }  
        }, 50);
        setTimeout(() => {
            document.querySelector('.n8').style.left = 360 + "px"
            document.querySelector('.n8').style.opacity = "100%"
            // pour les partant 
            document.querySelector('.n3').style.left = 500 + "px"
            document.querySelector('.n3').style.opacity = "0%"
        }, 300);
        setTimeout(() => {
            document.querySelector('.n0').style.left = 500 + "px"
            document.querySelector('.n0').style.opacity = "100%"
            document.querySelector('.n7').style.left = 640 + "px"
            document.querySelector('.n7').style.opacity = "0%"
        }, 470);
    }
    
    if( i == 0) {
        document.querySelector('.n7').style.left = 220 + "px"
        document.querySelector('.n3').style.left = 360 + "px"
        setTimeout(() => {
        for (let j = 0; j < document.querySelectorAll('.n').length; j++) {
            document.querySelectorAll('.n')[j].style.transition = ' .2s ease-in';
            console.log(document.querySelectorAll('.n')[j].style.transition)
        }  
        }, 50);
        setTimeout(() => {
            document.querySelector('.n7').style.left = 360 + "px"
            document.querySelector('.n7').style.opacity = "100%"
            // pour les partant 
            document.querySelector('.n8').style.left = 500 + "px"
            document.querySelector('.n8').style.opacity = "0%"
        }, 300);
        setTimeout(() => {
            document.querySelector('.n3').style.left = 500 + "px"
            document.querySelector('.n3').style.opacity = "100%"
            document.querySelector('.n0').style.left = 640 + "px"
            document.querySelector('.n0').style.opacity = "0%"
        }, 470);
    }
    
    
    
}

document.querySelector('.droite').addEventListener('click', increr)
document.querySelector('.left').addEventListener('click', decrer)


