import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: '/dashboard/progress' },
        { title: 'Gráficas', url: '/dashboard/grafica1' },
      ],
    },
  ];

  constructor() {}
}
