import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './Components/main/main.component';

import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WebprojectsComponent } from './Components/webprojects/webprojects.component';
import { CplusplusComponent } from './Components/Cplusplus/Cplusplus.component';
import { JavaComponent } from './Components/java/java.component';
import { ITBlogComponent } from './Components/itblog/itblog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    FooterComponent,
    WebprojectsComponent,
    CplusplusComponent,
    JavaComponent,
    ITBlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
