'use strict'
function mySubmit() {
    var inputFormat = parseInt(document.querySelector('#inputFormat').value);
    var outputFormat = parseInt(document.querySelector('#outputFormat').value);
    var input = document.querySelector('#input').value;
    var output;
  
    if (input == '') {
      output = 'Input Required';
    } else if (inputFormat == outputFormat) {
      output = input;
    } else {
      output = format(input, inputFormat, outputFormat);
    }
    document.querySelector('#output').value = output;
  }

function format(input, inputFormat, outputFormat) {
    var temp, output;
    switch (inputFormat) {
      case 1:
        temp = parseInt(input, 2);
        break;
      case 2:
        temp = parseInt(input, 8);
        break;
      case 3:
        temp = parseInt(input, 10);
        break;
      case 4:
        temp = parseInt(input, 16);
        break;
    }
    switch (outputFormat) {
      case 1:
        output = temp.toString(2);
        break;
      case 2:
        output = temp.toString(8);
        break;
      case 3:
        output = temp.toString(10);
        break;
      case 4:
        output = temp.toString(16);
        break;
    }
        return output;
}

function mySwap() {
    var inputFormat = document.querySelector('#inputFormat').value;
    var outputFormat = document.querySelector('#outputFormat').value;
    document.querySelector('#inputFormat').value = outputFormat;
    document.querySelector('#outputFormat').value = inputFormat;
  }