function obrab() {

var textToSave = document.getElementById("fio").value;

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'myFile.txt';
hiddenElement.click();

}
