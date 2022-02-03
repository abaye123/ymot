let server = 'private'
let server = 'token'
let server = 'path'

let listfile = JSON.parse(UrlFetchApp.fetch(`https://${server}call2all.co.il/ym/api/GetIVR2Dir?token=${token}&path=${path}`));
   if (listfile.responseStatus === 'OK') {
    let lastfilename = listfile.files
      .filter(file => file.fileType === 'audio' || file.fileType === 'tts')
      .map(file => file.name.split('.')[0])
      .find(filename => !isNaN(fileName));
    let newnumber = number(lastfilename || -1) + 1;
    let newname = newnumber.toString().padStart(3, '0');
    let fileextension = '.tts'
    let filePath = `${path}${newname}${fileextension}`;
