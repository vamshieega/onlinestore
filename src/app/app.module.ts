import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'; 
import { AppRoutingModule } from './app-routing.module';  
import { RecipesModule } from './recipes/recipes.module';
import { AuthComponent } from './auth/auth.component'; 
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecipesModule ,
    SharedModule,
    CoreModule
     
  ], 
  bootstrap: [AppComponent],
  
})
export class AppModule { }
