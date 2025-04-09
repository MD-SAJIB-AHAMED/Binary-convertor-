function convertToBinary() {
  const input = document.getElementById('textInput').value;
  let binaryOutput = '';

  for (let i = 0; i < input.length; i++) {
    binaryOutput += input[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
  }

  document.getElementById('output').innerText = 'Binary: ' + binaryOutput.trim();
}

function convertToWord() {
  const input = document.getElementById('binaryInput').value.trim();
  const binaryArray = input.split(' ');
  let wordOutput = '';

  for (let i = 0; i < binaryArray.length; i++) {
    wordOutput += String.fromCharCode(parseInt(binaryArray[i], 2));
  }

  document.getElementById('output').innerText = 'Word: ' + wordOutput;
}

function switchMode() {
  const mode = document.getElementById('modeSelector').value;
  if (mode === 'textToBinary') {
    document.getElementById('textToBinaryBox').style.display = 'block';
    document.getElementById('binaryToTextBox').style.display = 'none';
  } else {
    document.getElementById('textToBinaryBox').style.display = 'none';
    document.getElementById('binaryToTextBox').style.display = 'block';
  }
}
