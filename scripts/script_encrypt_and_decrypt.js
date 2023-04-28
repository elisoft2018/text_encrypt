
let buttonEncrypt = document.getElementById("encrypt");
let buttonDecrypt = document.getElementById("decrypt");
let buttonReset = document.getElementById("reset");
let buttonCopyText = document.getElementById("copy_button");
let encrypt_and_decrypt_text = document.getElementById("encrypt_and_decrypt_text");
let text_tooltip = document.getElementById("text_tooltip");
let input = document.getElementById("text_message");
let elements = document.getElementById("elements");
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
        elements.hidden = true;

    } else {

        elements.hidden = false;
        input.focus();
        alert("Debes ingresar un texto para cifrar");

    }

}

function printingMessageDecrypt() {

    if (input.value != "") {

        encrypt_and_decrypt_text.innerText = input.value
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

    } else {

        alert("Debes ingresar un texto cifrado para decifrar");
        elements.hidden = false;
        input.focus();

    }

}

function copyText() {

    if (encrypt_and_decrypt_text.innerText != "") {


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