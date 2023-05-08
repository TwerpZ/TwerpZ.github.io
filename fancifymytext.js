function biggerButtonClick() {
    document.getElementById("text-input").style.fontSize = "24pt"; // Makes the text bigger
  }
  
  function styleRadioChanged() {
    var textArea = document.getElementById("text-input");
    var fancyRadio = document.getElementById("fancy-radio");
    if (fancyRadio.checked) {
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
      textArea.style.fontWeight = "bold";
    } else {
      textArea.style.color = "";
      textArea.style.textDecoration = "";
      textArea.style.fontWeight = "";
    }
  }
  
  function mooButtonClick() {
    var textArea = document.getElementById("text-input");
    var text = textArea.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].trim().toUpperCase();
    }
    text = sentences.join("-Moo.");
    textArea.value = text;
  }
  
  