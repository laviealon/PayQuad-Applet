import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <div class="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/861725941?background=1&autoplay=1&loop=1&byline=0&title=0background=1&autoplay=1&loop=1&byline=0&title=0"
                frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    <section>
      <p class="header-home" >Browse the hottest homes of 2023.</p>
      <button id="view-homes" class="primary action" type="button" [routerLink]="['/listing']">View homes</button>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomePageComponent {

}
