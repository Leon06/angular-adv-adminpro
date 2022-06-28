import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

//Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,    
    NopagefoundComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
