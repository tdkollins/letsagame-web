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
      "tikTok": row.tikTok ? row.tikTok : null,
      "youtube": row.youtube ? row.youtube : null
    }
  };
}

async function getSheets(sheetIndex) {
  /* Helper which authenticates with the google sheets */
  const doc = new GoogleSpreadsheet('13Q9rOkK_n2vd77exl4S-Xcl9wCjSnmzTMnbmldv_9cc');
  await doc.useServiceAccountAuth(serviceAccountCreds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[sheetIndex];
  return await sheet.getRows();
}
 
export async function getGames() {
  /*
    Retrieves schedule from the google sheets.
    Returns a promise with resolved format:
      [
        {
          name: str,
          startTime: Date (utc)
          endTime: Date (utc)
          gamePlayers: [str]
        }
      ]
  */
  const rows = await getSheets(1);
  let games = [];
  rows.forEach((row) => {
    games.push(dumpGameObject(row));
  });
  return games;
}

export async function getTeamProfiles() {
  /*
    Retrieves team profiles from the google sheets.
    Returns a promise with resolved format:
      [
        {
          name: str,
          pfpPath: str,
          description: str,
          socialMediaURLs: {
            twitter: str (optional)
            instagram: str (optional)
            twitch: str (optional)
            tikTok: str (optional)
          }
        }
      ]
  */
  const rows = await getSheets(2);
  let teamProfiles = [];
  rows.forEach((row) => {
    teamProfiles.push(dumpTeamObject(row));
  });
  return teamProfiles;
}

