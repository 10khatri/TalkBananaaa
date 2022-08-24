var inputContainer = document.querySelector(".input-container");
var translateBtn = document.querySelector(".btn-translate");
var outputContainer = document.querySelector(".output-container");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text) {
  return serverURL + "?" + "text=" + text
}

translateBtn.addEventListener("click", () => {
  inputText = inputContainer.value;
  fetch(getTranslationUrl(inputText)).then(response => response.json()).then(json => {
    var translatedText = json.contents.translated;

    outputContainer.innerHTML = translatedText;


  });

})

