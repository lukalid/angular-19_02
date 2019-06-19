import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {HttpClientModule} from '@angular/common/http';
import {PersistenceService} from './shared/persistence.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // contains common module and some more
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    PersistenceService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
