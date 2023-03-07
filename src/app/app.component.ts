import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'herramienta', url: '/herramienta', icon: 'settings' },
    { title: 'Genero', url: '/genero', icon: 'person' },
    { title: 'Edad', url: '/edad', icon: 'people' },
    { title: 'Universidad', url: '/universidad', icon: 'archive' },
    { title: 'Clima', url: '/clima', icon: 'cloud' },
    { title: 'Contratame', url: '/contratame', icon: 'person' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
