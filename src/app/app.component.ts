import { Component } from '@angular/core';
import { HomeComponent } from "./listing/home.component";
import { RouterModule } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, NgOptimizedImage],
  template: `
    <main>
      <a [routerLink]="['/']">
    <header class="payquad" id="navbar">
      <img class="PayQuad-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
      </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
