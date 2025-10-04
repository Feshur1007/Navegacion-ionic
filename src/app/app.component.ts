import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonicModule,
    RouterModule,
    NgFor
  ]
})
export class AppComponent {
 public appPages = [
{ title: 'Página 1', url: '/pages/pagina1', icon: 'mail' },
{ title: 'Página 2', url: '/pages/pagina2', icon: 'paper-plane' },
];

  constructor() {}
}