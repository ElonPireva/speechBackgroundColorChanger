// These syntaxs are used for Chrome Support.
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US'; 
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1; 

const showRecognitionResult = document.getElementById('output');
const getBtn = document.getElementById('btn');

getBtn.addEventListener('click', () => {
    recognition.start();
})

recognition.onresult = (event) => {
    const color = event.results[0][0].transcript;
    showRecognitionResult.innerHTML = ' ' + color;
    const noSpacesString = color.replace(/ /g,''); 
    document.body.style.backgroundColor = noSpacesString;
}

recognition.onspeechend = () => {
    recognition.stop(); 
}
