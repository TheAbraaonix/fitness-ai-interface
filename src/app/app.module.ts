import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { AuthModule } from "./features/auth/auth.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  providers: [provideHttpClient()],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}