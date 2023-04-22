
let buttonEncrypt = document.getElementById("encrypt");
let buttonDecrypt = document.getElementById("decrypt");
let buttonReset = document.getElementById("reset");
let buttonCopyText = document.getElementById("copy_button");
let encrypt_and_decrypt_text = document.getElementById("encrypt_and_decrypt_text");
let contentButtonDecrypt = document.getElementById("contentButtonDecrypt");
let contenCopyButton = document.getElementById("contenCopyButton");
let text_tooltip = document.getElementById("text_tooltip");
let input = document.getElementById("text_message");
contentButtonDecrypt.hidden = true;
contenCopyButton.hidden = true;
input.focus();

function printingMessageEncrypt() {

    let phrase;
    let arrayPhrase;
    phrase = input.value;
    input.focus();

    if (phrase != "") {

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

        let elements = document.getElementById("elements");
        elements.hidden = true;

        contentButtonDecrypt.hidden = false;
        contenCopyButton.hidden = false;

    } else {

        alert("Debes ingresar un texto para cifrar");

    }

}

function printingMessageDecrypt() {

    if (input.value != "") {

        input.focus();

        encrypt_and_decrypt_text.innerText = encryptTextFinal
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        input.value = "";

    } else {

        alert("Debes ingresar un texto cifrado para decifrar");

    }

}

function copyText() {

    if (encrypt_and_decrypt_text.value != "") {

        let textCopy = encrypt_and_decrypt_text;
        let selection = document.createRange();
        selection.selectNodeContents(textCopy);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(selection);
        let copy = document.execCommand('copy');
        window.getSelection().removeRange(selection);
        encrypt_and_decrypt_text.value = "";
        elements.hidden = false;
        encrypt_and_decrypt_text.innerText = ""
        input.value = "";
        input.focus();

    }else{

        text_tooltip.hidden = true;
        input.focus();
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