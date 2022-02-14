import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeContentContainerModule } from './resume-content-container/resume-content-container.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResumeContentContainerModule,
    FontAwesomeModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
