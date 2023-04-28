
let buttonEncrypt = document.getElementById("encrypt");
let buttonDecrypt = document.getElementById("decrypt");
let buttonReset = document.getElementById("reset");
let buttonCopyText = document.getElementById("copy_button");
let encrypt_and_decrypt_text = document.getElementById("encrypt_and_decrypt_text");
let contentButtonDecrypt = document.getElementById("contentButtonDecrypt");
let contenCopyButton = document.getElementById("contenCopyButton");
let contenButtonReset = document.getElementById("contentButtonReset");
let text_tooltip = document.getElementById("text_tooltip");
let input = document.getElementById("text_message");
let elements = document.getElementById("elements");
input.focus();

function printingMessageEncrypt() {

    let phrase;
    let arrayPhrase;
    phrase = input.value;
    input.focus();

    if (phrase == "") {

        elements.hidden = false;
        encrypt_and_decrypt_text.innerText = "";
        encrypt_and_decrypt_text.value = "";
        input.focus();

        alert("Debes ingresar un texto para cifrar");

    } else {

        arrayPhrase = phrase.split("");

        for (let vocal = 0; vocal <= arrayPhrase.length - 1; vocal++) {

            if (arrayPhrase[vocal] == "a") {

                arrayPhrase[vocal] = "ai";

            } else if (arrayPhrase[vocal] == "e") {

                arrayPhrase[vocal] = "enter";

            } else if (arrayPhrase[vocal] == "i") {

                arrayPhrase[vocal] = "imes";

            } else if (arrayPhrase[vocal] == "o") {

                arrayPhrase[vocal] = "ober";

            } else if (arrayPhrase[vocal] == "u") {

                arrayPhrase[vocal] = "ufat";
            }

        }

        encryptTextFinal = arrayPhrase.join("");
        encrypt_and_decrypt_text.innerText = encryptTextFinal;
        elements.hidden = true;
    }

}

function printingMessageDecrypt() {

    if (input.value == "") {

        alert("Debes ingresar un texto cifrado para decifrar");

        encrypt_and_decrypt_text.innerText = "";
        encrypt_and_decrypt_text.value = "";
        elements.hidden = false;
        input.focus();


    } else {

        encrypt_and_decrypt_text.innerText = input.value
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

    }


}

function copyText() {

    if (encrypt_and_decrypt_text.value != "") {


        let textCopy = encrypt_and_decrypt_text;
        textCopy.parentElement.innerHTML;
        let selection = document.createRange();
        selection.selectNodeContents(textCopy);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(selection);
        let copy = document.execCommand('copy');
        window.getSelection().removeRange(selection);
        elements.hidden = false;
        encrypt_and_decrypt_text.innerText = "";
        encrypt_and_decrypt_text.value = "";
        input.focus();


    } else {

        alert("No hay texto para copiar al portapapeles");

        text_tooltip.hidden = true;


    }


}

function lowerCase() {

    input.value = input.value.toLowerCase();

}

function reset() {

    window.location.reload();

}

buttonEncrypt.onclick = printingMessageEncrypt;
buttonDecrypt.onclick = printingMessageDecrypt;
buttonReset.onclick = reset;
buttonCopyText.onclick = copyText;
input.onkeydown = lowerCase;