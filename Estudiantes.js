

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

function GetCarreras() {

  return GetRows(
    'carreras',
    'nombre.asc'
  );

}

function GetEstudiante(id){

  return GetRow(
    'estudiantes',
    id
  );

}

function DeleteEstudiante(id){

  return DeleteRow(
    'estudiantes',
    id
  );

}

function InsertEstudiante(data) {
  return InsertRow('estudiantes', data);
}

function UpdateEstudiante(id, data) {
  return UpdateRow('estudiantes', id, data);
}

function TestCarreras() {

  const data = GetCarreras();

  Logger.log(
    JSON.stringify(data)
  );

  return data;

}

function TestInsert() {

  const data = {

    apellido: 'Prueba',
    nombre: 'Usuario',
    dni: '99999999',
    carrera_id: 73

  };

  return InsertEstudiante(data);

}