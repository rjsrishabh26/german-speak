var click1 = document.querySelector("#button1");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var click2 = document.querySelector("#button2");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error", error);
    alert("Something is wrong with the server! Please try again later")
}


function clickHandler() {
     var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};
function clearClickHandler(event) {
    txtInput.value = "";
    outputDiv.innerHTML = "";
}

click1.addEventListener("click", clickHandler);
click2.addEventListener("click",clearClickHandler);
