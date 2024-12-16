import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
  TranslateModule
} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [TranslatePipe, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listar-tareas';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switch_language(lng: string){
    this.translate.use(lng);
  }
}
