function GetEstudiantes() {

  const url =
    CONFIG.supabaseUrl +
    "/rest/v1/estudiantes" +
    "?select=*,carreras(nombre)" +
    "&order=apellido.asc";

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

function TestEstudiantes() {

  Logger.log(
    JSON.stringify(
      GetEstudiantes()
    )
  );

}