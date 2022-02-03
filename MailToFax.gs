 /*
#Written by: @תפארת1 מפורום ימות המשיח
#user: https://f2.freeivr.co.il/user/%D7%AA%D7%A4%D7%90%D7%A8%D7%AA1
#Contact: abaye.ym@gmail.com
*/
 function ChecklabelFax() {
  //שם התווית לבדיקה
  var labelName = "Fax_before_sent";
  //הטענת התוית
  var label = GmailApp.getUserLabelByName(labelName);
  //בדיקה שהתוית קיימת
  if (label == null) { Logger.log("אין תווית בשם " + labelName + " בגמייל שלך"); return false; }
  //טעינת כל המיילים/תהליכים
  var threads = label.getThreads();
 
  // לולאה מעבר על כל ההודעות
  for (var i = 0; i < threads.length; i++) {
 
    var messages = threads[i].getMessages();
    // מעבר בתוך הודעה
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      // מעבר בתוך כל הקבצים המצורפים
      var att = message.getAttachments();
      for (var z = 0; z < att.length; z++) {
        var attBlob = att[z].copyBlob();
        sendFax(message.getSubject(), attBlob);
      }
    }
    // הסרת התווית
    threads[i].removeLabel(label);
    //סימון כנקרא
    message.markRead();
  }
}
 
 
 function sendFax(phoneFax, attachments1) {
  var url = "https://call2all.co.il/ym/api/SendFax"
  var form = {
    'token': '0799***:1234',
    'pdfFile': 'UPLOAD',
    'phone': phoneFax,
    'callerId': '07999',
    'fileToUpload': attachments1
  };
  uploadFile(url, form);
 }
 
 
function uploadFile(url, form) {
  var options = {
    method: "POST",
    payload: form
  };
  var request = UrlFetchApp.getRequest(url, options);   
  var response = UrlFetchApp.fetch(url, options);
  console.info("Response body: " + response.getContentText());
}
