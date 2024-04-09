import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { MovieserviceService } from './movieservice.service';
import { EntryComponent } from "./pages/entry/entry.component";
import { CarouselComponent } from './pages/carousel/carousel.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [MovieserviceService],
    imports: [RouterOutlet, EntryComponent,CarouselComponent]
})
export class AppComponent {
  title = 'letterboxd-clone';
}
