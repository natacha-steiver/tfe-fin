'use strict'

class FileController {
  async upload({ request, session, response }) {
const file = request.file("drive_file");
if(!file) return;
const {clientName,type,subtype, tmpPath  } = request.file("drive_file");
const token = session.get("accessToken");
const oAuth2Client = new google.auth.OAuth2();    oAuth2Client.setCredentials({ access_token: token });
const drive = google.drive({ version: "v3", auth: oAuth2Client });     const fileMetaData = {        name: clientName    }
const media = {
    mimeType: `${type}/${subtype}`,
    body: fs.createReadStream(tmpPath)
}
const promisedCreate = (options) => {
  return new Promise((resolve, reject) => {                     drive.files.create(options,
(err, file) => {                if(err) reject(err)                 resolve(file);            });        });
}

try {
const file  = await promisedCreate({resource: fileMetaData, media, fields: 'id'});
session.flash({ notification: 'Your file has been uploaded to Google Drive' })
response.redirect("/");
} catch (error) {
session.flash({ notification: error.message })        response.redirect("/");
}  }
}

module.exports = FileController
