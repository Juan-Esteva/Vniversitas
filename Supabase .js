function GetRows(
  table,
  orderBy = 'id'
){

  const url =
    CONFIG.supabaseUrl +
    '/rest/v1/' +
    table +
    '?select=*' +
    '&order=' + orderBy;

  const response =
    UrlFetchApp.fetch(url,{
      method:'get',
      headers:{
        apikey:CONFIG.supabaseKey,
        Authorization:
          'Bearer ' +
          CONFIG.supabaseKey,

        Accept:'application/json',

        'Accept-Profile':
          CONFIG.supabaseSchema
      }
    });

  return JSON.parse(
    response.getContentText()
  );

}

function InsertRow(table, data) {

  const response = UrlFetchApp.fetch(
    CONFIG.supabaseUrl + '/rest/v1/' + table,
    {
      method: 'post',
      contentType: 'application/json',
      headers: {
        apikey: CONFIG.supabaseKey,
        Authorization: 'Bearer ' + CONFIG.supabaseKey,
        'Content-Profile': CONFIG.supabaseSchema,
        Prefer: 'return=representation'
      },
      payload: JSON.stringify(data)
    }
  );

  return JSON.parse(response.getContentText());

}

function UpdateRow(table, id, data) {

  const response = UrlFetchApp.fetch(
    CONFIG.supabaseUrl +
    '/rest/v1/' +
    table +
    '?id=eq.' +
    id,
    {
      method: 'patch',
      contentType: 'application/json',
      headers: {
        apikey: CONFIG.supabaseKey,
        Authorization: 'Bearer ' + CONFIG.supabaseKey,
        'Content-Profile': CONFIG.supabaseSchema,
        Prefer: 'return=representation'
      },
      payload: JSON.stringify(data)
    }
  );

  return JSON.parse(response.getContentText());

}

function DeleteRow(table, id) {

  const response = UrlFetchApp.fetch(
    CONFIG.supabaseUrl +
    '/rest/v1/' +
    table +
    '?id=eq.' +
    id,
    {
      method: 'delete',
      headers: {
        apikey: CONFIG.supabaseKey,
        Authorization: 'Bearer ' + CONFIG.supabaseKey,
        'Content-Profile': CONFIG.supabaseSchema
      }
    }
  );

  return response.getResponseCode();

}

function GetRow(table,id){

  const url =
    CONFIG.supabaseUrl +
    '/rest/v1/' +
    table +
    '?id=eq.' +
    id +
    '&select=*';

  const response =
    UrlFetchApp.fetch(url,{
      method:'get',
      headers:{
        apikey:CONFIG.supabaseKey,
        Authorization:
          'Bearer ' +
          CONFIG.supabaseKey,

        Accept:'application/json',

        'Accept-Profile':
          CONFIG.supabaseSchema
      }
    });

  const rows =
    JSON.parse(
      response.getContentText()
    );

  return rows.length
    ? rows[0]
    : null;

}