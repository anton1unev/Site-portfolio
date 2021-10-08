/*function obrab() {

var textToSave = document.getElementById("fio").value;

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'fields forms.txt';
hiddenElement.click(); 

} */

/*obrab.addEventListener = function() {
    
    var textToSave = document.getElementById("fio").value;

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'fields forms.txt';
hiddenElement.click(); 

}
*/

function obrab() {
    alert("Приветствую Вас, " + document.getElementById("fio").value);
    alert("Ваш Email " + document.getElementById("email").value);
}
