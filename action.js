function makeBold() {
     let textArea = document.getElementById("textArea");
     textArea.style.fontWeight = textArea.style.fontWeight === "bold" ? "normal" : "bold";
}
-

     function makeItalic() {
          let textArea = document.getElementById("textArea");
          textArea.style.fontStyle = textArea.style.fontStyle === "italic" ? "normal" : "italic";
     }

function makeUnderline() {
     let textArea = document.getElementById("textArea");
     textArea.style.textDecoration = textArea.style.textDecoration === "underline" ? "none" : "underline";
}

let fontSize = 12;
function makefontSizebig() {
     fontSize += 1;
     let textArea = document.getElementById("textArea");
     textArea.style.fontSize = fontSize + "px";
}

// let fontsize = 12;
function makefontSizesmall() {
     fontSize -= 1;
     let textArea = document.getElementById("textArea");
     textArea.style.fontSize = fontSize + "px";
}
function clear() {
     let textArea = document.getElementById("textArea");
     textArea.value = "";
}
