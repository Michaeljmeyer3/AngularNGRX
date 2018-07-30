import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { GroupSwitchComponent } from './header/group-switch/group-switch.component';
import { SearchComponent } from './header/search/search.component';
import { QuickAddComponent } from './header/quick-add/quick-add.component';
import { LoginScreenComponent } from './login/login-screen/login-screen.component';
import { KintMainComponent } from './kint-main/kint-main.component';
import { KintFooterComponent } from './kint-footer/kint-footer.component';
import { KintHeaderComponent } from './kint-header/kint-header.component';
import { NavMenuComponent } from './header/user-menu/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    UserMenuComponent,
    GroupSwitchComponent,
    SearchComponent,
    QuickAddComponent,
    LoginScreenComponent,
    KintMainComponent,
    KintFooterComponent,
    KintHeaderComponent,
    NavMenuComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
