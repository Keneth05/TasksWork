import { Component, AfterViewInit } from '@angular/core';
declare const M: any;
@Component({
  selector: 'gen-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Inicializa el sidenav de Materialize
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }
}
