function myFunction() {
  var ss = SpreadsheetApp.create('New Test Sheet 2', 50, 20); 
  Logger.log(ss.getId()); 
}

function fun1(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0'); 
  var sheet = ss.getSheets()[0]; 
  //  ss.getRange('A1').setBackground('red');
  //  ss.getRange('B1').setBackground('blue'); 
  var range = sheet.getRange(10, 5, 2, 4).setBackground('purple'); 
  var temp = range.getValues(); 
  Logger.log(temp);
  range.setValues([['Value 1', 'Value 2', 'Value 3', 'Value 4'],['Value 1','Value 2','Value 3','Value 4']]); 
  Logger.log(temp[1][2]);  
  Logger.log(ss.getName()); 
}

function fun2(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0'); 
  var sheet = ss.getSheets()[0]; 
  var doc = DocumentApp.create('Sample sheet data');
  var body = doc.getBody(); 
  var rowData = sheet.getRange(10, 5, 2, 4).getValues();
  Logger.log(rowData); 
  body.insertParagraph(0, ss.getName())
  .setHeading(DocumentApp.ParagraphHeading.HEADING1);  
  var table =  body.appendTable(rowData); 
  table.getRow(0).editAsText().setBold(true); 
}

function fixData(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0'); 
  var sheet = ss.getSheets()[0]; 
  var doc = DocumentApp.create('Sample sheet data 2');
  var body = doc.getBody(); 
  var rowData = sheet.getRange(1, 1, 4, 4).getValues();
  Logger.log(rowData); 
  body.insertParagraph(0, ss.getName())
  .setHeading(DocumentApp.ParagraphHeading.HEADING1);  
  var table =  body.appendTable(rowData); 
  table.getRow(0).editAsText().setBold(true); 
}

function dynamicDataTable(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0'); 
  var sheet = ss.getSheets()[0]; 
  var doc = DocumentApp.openById('1LiJwRDllwtSQUFEgN_jTuAlUvOFIiZ4-nrRp0e0aaGk');
  var body = doc.getBody(); 
  var rowData = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  Logger.log(rowData); 
  body.insertParagraph(0, ss.getName()).setHeading(DocumentApp.ParagraphHeading.HEADING1);  
  var table =  body.appendTable(rowData); 
  table.getRow(0).editAsText().setBold(true); 
}

function tracking(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0');
  var sheet1 = ss.getSheetByName('Sheet1'); 
  var tracking = ss.getSheetByName('tracking');
  var rowData = sheet1.getRange(1, 1, sheet1.getLastRow(), sheet1.getLastColumn()).getValues();
  Logger.log(rowData); 
  var doc = DocumentApp.openById('1LiJwRDllwtSQUFEgN_jTuAlUvOFIiZ4-nrRp0e0aaGk');
  var body = doc.getBody(); 
  body.appendParagraph('New Table #'+tracking.getLastRow())
  .setHeading(DocumentApp.ParagraphHeading.HEADING1);  
  var table =  body.appendTable(rowData); 
  var adder = tracking.appendRow([doc.getName(), doc.getId(), doc.getUrl(), Date()])
}

function resizeColumns(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0')
  var tracking = ss.getSheetByName('tracking');
  tracking.autoResizeColumns(1, 4); 
}

function clearSheet(){
  var ss = SpreadsheetApp.openById('1i0_yAs9dGjwb3nRMWarrbxGhZbDu4XKvgv24DMM8FV0')
  var tracking = ss.getSheetByName('Sheet3');
  tracking.clear(); 
}
