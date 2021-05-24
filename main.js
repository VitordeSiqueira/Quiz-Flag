
let perguntas = 
[
    {
        id: 1,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Indonesia', 'B) Japão', 'C) Chile', 'D) Polônia'],
        resposta: 'A',

    },

    {
        id: 2,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Rússia', 'B) Argentina', 'C) Mexico', 'D) Holanda'],
        resposta: 'C'
    },

    {
        id: 3,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Venezuela', 'B) Egito', 'C) Líbano', 'D) Marrocos'],
        resposta: 'C'
    },

    {
        id: 4,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Egito', 'B) Honduras', 'C) Argentina', 'D) Coreia do Sul'],
        resposta: 'B'
    },

    {
        id: 5,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Noruega', 'B) Itália', 'C) Irlanda', 'D) Costa do Marfim'],
        resposta: 'D'
    },

    {
        id: 6,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Rússia', 'B) França', 'C) Eslováquia', 'D) Nigeria'],
        resposta: 'A'
    },

    {
        id: 7,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Bulgaria', 'B) Hungria', 'C) Brasil', 'D) China'],
        resposta: 'A'
    },

    {
        id: 8,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Guiné', 'B) Áustria', 'C) Holanda', 'D) Peru'],
        resposta: 'D'
    },

    {
        id: 9,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Espanha', 'B) França', 'C) Portugal', 'D) Egito'],
        resposta: 'A'
    },

    {
        id: 10,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Uruguai', 'B) Marrocos', 'C) Egito', 'D) China'],
        resposta: 'B'
    },

    {
        id: 11,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) Guatemala', 'B) Argentina', 'C) Honduras', 'D) Japão'],
        resposta: 'A'
    },

    {
        id: 12,
        pergunta: "Qual o pais dessa bandeira? ",
        alternatives: ['A) África do Sul', 'B) Brasil', 'C) Holanda', 'D) Coreia do Sul'],
        resposta: 'D'
    },
];



const bandeiras = [
    "./Bandeiras/Bandeira-Indonesia-1.svg",
    "./Bandeiras/Bandeira-Mexico-2.svg",
    "./Bandeiras/Bandeira-Libano-3.svg",
    "./Bandeiras/Bandeira-Hondura-4.svg",
    "./Bandeiras/Bandeira-CostaDoMarfim-5.svg",
    "./Bandeiras/Bandeira-Russia-6.svg",
    "./Bandeiras/Bandeira-Bulgaria-7.svg",
    "./Bandeiras/Bandeira-Peru-8.svg",
    "./Bandeiras/Bandeira-Espanha-9.svg",
    "./Bandeiras/Bandeira-Marrocos-10.svg",
    "./Bandeiras/Bandeira-Guatemala-11.svg",
    "./Bandeiras/Bandeira-Coreia-12.svg"
]

function initial() {
    let numberQuestion = document.querySelector('.question > h2')
    let numberQuestionScore = document.querySelector('.score > h2')
    let flag = document.querySelector('#myImg')
    let labels = document.querySelectorAll('.label')
    let arr = [...labels]
    let check = document.getElementsByName('opt')
    let arrCheck = [...check]
    

    for(let i = 0; i <= arr.length-1; i++) {
        arr[i].innerHTML = perguntas[0].alternatives[i]
    }


    numberQuestion.innerHTML = `Bandeira ${1}`
    numberQuestionScore.innerHTML = `Questão ${1}/12`

    flag.setAttribute('src', bandeiras[indice])
    
    for (const i in arrCheck) {
        
        if(arrCheck[i].checked) {
            arrCheck[i].checked = false
        }
    }

}

let indice = 0
let score = 0

function nextQuestion() {

    let check = document.getElementsByName('opt')
    let arrCheck = [...check]

    

    
    for(let i = 0; i <= arrCheck.length-1;i++) {
        if(arrCheck[i].checked) {
           if(arrCheck[i].value === perguntas[indice].resposta) {
            score++
           }
        }
    }

    console.log(score)
    
    for (const i in arrCheck) {
        
        if(arrCheck[i].checked) {
            arrCheck[i].checked = false
        }
    }


    changeFlag() 
    changeNumberQuestion()
    changeFlag()
    alternativesLabel()
    scoreScreen()
    
    

    let labels = document.querySelectorAll('label')
    let arr = [...labels]

    for (const i of arr) {
        i.removeAttribute("id")  

    }

    if(indice >= 12) {
        endQuestions()
    }
    
}

let idQuestion = 1


function alternativesLabel() {
    let labels = document.querySelectorAll('.label')
    let arr = [...labels]
    
    if(idQuestion >= 12) {
        return endQuestions()
    }
    
    for(let i = 0; i <= arr.length-1; i++) {
        arr[i].innerText = perguntas[idQuestion].alternatives[i] 
    }

    idQuestion++

}
     document.body.addEventListener('change', function(e) {
         let target = e.target
         let radio = document.getElementsByName('opt')
         let arrayRadio = [...radio]
        

         if(target.value === 'A' || target.value === 'B' || target.value === 'C' || target.value === 'D'){
             let labels = document.querySelectorAll('.label')
             let arra = [...labels]
    
             for (const i of arra) {
                i.removeAttribute('id')

                if(i.className[0] === target.value) {
                    i.setAttribute('id', 'labels')
                }       

             }

         }
     })
    
     

     


function changeNumberQuestion() {
    indice++

    if(indice > 11){
        indice = 11
    }

    let id = perguntas[indice].id
    let numberQuestion = document.querySelector('.question > h2')
    let numberQuestionScore = document.querySelector('.score > h2')

    numberQuestion.innerHTML = `Bandeira ${id}`
    numberQuestionScore.innerHTML = `Questão ${id}/12`

}


function changeFlag() {
    let flag = document.querySelector('#myImg')
    flag.setAttribute('src', bandeiras[indice])
}

function endQuestions() {
    let myModal = document.querySelector('.myModal')
    let pPorcent = document.querySelector('.porcent')
    let p = document.querySelector('.modal-content > p')

    myModal.style.display = "block"
    p.innerHTML = `Parabéns você acertou ${score} questões`

} 
function scoreScreen() {
    let span = document.querySelectorAll(`span`)
    let arraySpan = [...span]

    arraySpan[indice].classList.add('active')
}



function newGame() {
    indice = 0
    score = 0
    idQuestion = 1

    initial()

    let myModal = document.querySelector('.myModal')
    myModal.style.display = "none"

    let span = document.querySelectorAll(`span`)
    let arraySpan = [...span]

    for(let i = 0; i <= arraySpan.length; i++) {
        arraySpan[i].classList.remove('active')
    }
    
}

   

