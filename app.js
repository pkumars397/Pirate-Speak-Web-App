var btnTranslate = document.querySelector("#btn-Translate");

var txtIn = document.querySelector("#txt-Input")

var txtOut = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function translatedURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHanlder(error) {
    console.log("error occured", error);
    alert("Something Wrong With Server");
}

function clickEventHandler() {

    var textInput = txtIn.value;

    fetch(translatedURL(textInput))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOut.innerText = translatedText;
            })
        .catch(errorHanlder);
}

btnTranslate.addEventListener("click", clickEventHandler);