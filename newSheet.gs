function newSheet() {
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets(); //Gets all the tabs on the source spreadsheet. 
  var destFolder = DriveApp.getFolderById('folder_id'); // Destination folder. Replace folder_id with the folder ID
  var sheetURL = []; //Array to store the URL of the newly created sheets. Optional

  sourceSheet.forEach(sheet => { //Loops through each of the tabs and gets the names of each one
    var name = sheet.getName();
    var newSheet = SpreadsheetApp.create(name); // Creates a new spreadsheet with the same filename as the tab.
    var newSheetURL = newSheet.getUrl(); //Gets the URL of the newly created sheet. Optional

    sheetURL.push([newSheetURL]);
    sheet.copyTo(SpreadsheetApp.openByUrl(newSheetURL)).setName(name); //Copies the tab from the source sheet to the new spreadsheet.
    SpreadsheetApp.openByUrl(newSheetURL).deleteSheet(newSheet.getSheetByName('Sheet1')); //Deletes the default Sheet1 tab.
    DriveApp.getFileById(newSheet.getId()).moveTo(destFolder);//Moves the newly created spreadsheet to the specified folder.
  });

  //This last part of the code is only needed if there's a need to store the URLs of the newly created sheets on an existing spreadsheet
  var destSheet = SpreadsheetApp.openById('sheet_id');
  //Opens the spreadsheet store the URLs to. Replace sheet_id with the ID of the spreadsheet  
  destSheet.getSheetByName('sheet_tab').getRange(1, 1, sheetURL.length).setValues(sheetURL);
  //Inserts the URLs. Replace sheet_tab with the name of the tab to store the URLs on.
}
