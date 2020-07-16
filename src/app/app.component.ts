import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appitems = [
    {
      label: 'Home',
      faIcon: 'icon-dashboard'
    },
    {
      label: 'Colaboradores',
      faIcon: 'icon-collaborators'
    },
    {
      label: 'Logeo',
      faIcon: 'icon-logeo'
    },
    {
      label: 'Anuncios',
      faIcon: 'icon-announcements'
    },
    {
      label: 'Solicitudes',
      faIcon: 'icon-requests'
    },
    {
      label: 'Reportes',
      faIcon: 'icon-reports',
    },
    {
      label: 'Configuracion',
      faIcon: 'icon-configurations',
    },
    {
      label: 'Logout',
      faIcon: 'icon-logout',
    }
  ];
  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: '#377ccb',
    fontColor: '#cae1ff',
    backgroundColor: '#377ccb',
    selectedListFontColor: 'red',
  };
  title = 'logeofont';
}
