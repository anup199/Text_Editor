function makeBold() {
     let textArea = document.getElementById("textArea");
     // textArea.style.fontWeight = textArea.style.fontWeight === "bold" ? "normal" : "bold";
     textArea.style.fontWeight = "bold";
}

function makeItalic() {
     let textArea = document.getElementById("textArea");
     textArea.style.fontStyle = textArea.style.fontStyle === "italic" ? "normal" : "italic";
}

function makeUnderline() {
     let textArea = document.getElementById("textArea");
     textArea.style.textDecoration = textArea.style.textDecoration === "underline" ? "none" : "underline";
}
