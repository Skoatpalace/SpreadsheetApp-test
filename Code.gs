function onOpen(e) {
  SpreadsheetApp.getUi()
  .createMenu('Advanced')
  .addItem('Name', 'name')
  .addSeparator()
  .addItem('showModalDialog', 'showModalDialog')
  .addItem('showModelessDialog', 'showModelessDialog')
  .addItem('sidebar', 'sidebar')
  .addSeparator()
  .addItem('Show selected', 'fun4')
  .addItem('Selected Copy To Sheet4', 'copyToSheet4')
  .addItem('Selected Copy To Sheet5', 'fun6')
  .addItem('Loop search', 'fun7')
  .addItem('sidebar HTML', 'sidebarHTML')
  .addItem('sidebarHTMLAgain', 'sidebarHTMLAgain')
  .addItem('sidebarHTMLBoots', 'sidebarHTMLBoots')
  .addSeparator()
  .addItem('sidebarLinked', 'sidebarLinked')
  .addToUi(); 
}

function fun1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log(ss.getUrl()); 
  var sheet = ss.getActiveSheet(); 
  Logger.log(sheet.getName()); 
}

function name(){
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Getting to know you', 'May I know your name ?', ui.ButtonSet.YES_NO); 
}

function showModalDialog() {
  var ui = SpreadsheetApp.getUi(); 
  var html = HtmlService.createHtmlOutput('<h1>Welcome</h1>').setHeight(400).setWidth(400); 
  ui.showModalDialog(html, 'title');
}

function showModelessDialog() {
  var ui = SpreadsheetApp.getUi(); 
  var html = HtmlService.createHtmlOutput('<h1>Welcome</h1>').setHeight(400).setWidth(400); 
  ui.showModelessDialog(html, 'title');
}

function sidebar() {
  var ui = SpreadsheetApp.getUi(); 
  var html = HtmlService.createHtmlOutput('<h1>Welcome</h1>'); 
  ui.showSidebar(html);
}

function fun4() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveRange();
  //ss.clearContent();
  //ss.getFontSize(); 
  //ss.getA1Notation();
  Logger.log(ss.getA1Notation()); 
  logOut(ss.getValues()); 
}

function copyToSheet4() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var outputSheet = ss.getSheetByName('sheet4');
  var selectedContent = ss.getActiveRange().getValues();
  var fixed = selectedContent.join().split(',');
  for (var x=0; x< selectedContent.length; x++){
    outputSheet.appendRow(selectedContent[x]);
  }  
}

function fun6() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var selRange = ss.getActiveRange().getA1Notation();
  var outputSheet = ss.getSheetByName('sheet5');
  logOut(selRange); 
  ss.getActiveRange().copyTo((outputSheet).getRange(selRange)); 
}

function fun7() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Searcher', 'What value did you want to find ?', ui.ButtonSet.YES_NO); 
  var data = ss.getDataRange().getValues(); 
  var output = '<h1>Search Result(s) : </h1>';
  for(var x=0; x<data.length; x++){
    Logger.log(data[x]);
    for(var i=0; i<data[x].length; x++){
      Logger.log(data[x][i]);
      if(data[x][i] == response.getResponseText()){
        output += 'Found row = ' + (x+1) + ' column = ' + (i+1) + '<br>';
        ss.getRange((x+1), (i+1)).setBackground('yellow'); 
        break;
      }
    }
  }
  logOut(output);
}

function sidebarHTML() {
  var template = HtmlService.createTemplate('<?= foo ?>');
  template.foo = 'Hello World!';
  Logger.log(template.evaluate().getContent());
  var html = template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
  SpreadsheetApp.getUi().showSidebar(html); 
}

function sidebarHTMLAgain() {
  var html = HtmlService.createTemplateFromFile('sidebar')
  .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
  SpreadsheetApp.getUi().showSidebar(html); 
}

function sidebarHTMLBoots() {
  var html = HtmlService.createTemplateFromFile('sidebar')
  .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
  SpreadsheetApp.getUi().showModalDialog(html, 'test'); 
}

function sidebarLinked() {
  var html = HtmlService.createTemplateFromFile('sidebarhtml')
  .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
  SpreadsheetApp.getUi().showSidebar(html); 
}

function getSheetData(data){
  Logger.log(data);
  return data;
}

function logOut(message) {
  var ui = SpreadsheetApp.getUi(); 
  var html = HtmlService.createHtmlOutput('<h1>'+message+'</h1>'); 
  ui.showModelessDialog(html, 'Selection');
}

