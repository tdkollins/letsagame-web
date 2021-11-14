import serviceAccountCreds from "./creds/sheetsCreds.json"
const { GoogleSpreadsheet } = require('google-spreadsheet');

function dumpGameObject(row) {
  return {
    "name": row.name,
    "startTime": Date.parse(row.startTime),
    "endTime": Date.parse(row.endTime),
    "gamePlayers": row.gamePlayers.split(",")
  };
}

function dumpTeamObject(row) {
  return {
    "name": row.name,
    "pfpPath": row.pfpPath,
    "description": row.desc,
    "socialMediaURLs": {
      "twitter": row.twitter ? row.twitter : null,
      "instagram": row.instagram ? row.instagram : null,
      "twitch": row.twitch ? row.twitch : null,
      "tikTok": row.tikTok ? row.tikTok : null
    }
  };
}

async function getSheets(sheetIndex) {
  const doc = new GoogleSpreadsheet('13Q9rOkK_n2vd77exl4S-Xcl9wCjSnmzTMnbmldv_9cc');
  await doc.useServiceAccountAuth(serviceAccountCreds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[sheetIndex];
  return await sheet.getRows();
}
 
export async function getGames() {
  const rows = await getSheets(1);
  let games = [];
  rows.forEach((row) => {
    games.push(dumpGameObject(row));
  });
  return games;
}

export async function getTeamProfiles() {
  const rows = await getSheets(2);
  let teamProfiles = [];
  rows.forEach((row) => {
    teamProfiles.push(dumpTeamObject(row));
  });
  return teamProfiles;
}

