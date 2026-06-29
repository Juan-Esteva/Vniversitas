function doGet() {

  return HtmlService
    .createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Vniversitas');

}

function Include(filename){

  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();

}