// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: 'http://3.9.236.139:3005/api/',
  apiUrlBase:'http://3.9.236.139:3006/',
  apiUrlPdf:'http://54.189.63.53:9100/',
  enviowhatsapp:'http://54.189.63.53:9600/link_V2',
  enviocorreo:'http://3.141.185.126:83/api/correoLinkEquifax',
  authUsername: 'FIRMADORV3',
  authPassword: 'super987',
  secretLocalStorage:'%_enext_%_Flow%',
  solicitar: 'https://enext.cloud/pre_equifax/admin/Consulta/consultaBase64.php',
  verificar:'https://enext.cloud/firmador/admin/Consulta/consultaBase64.php'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
