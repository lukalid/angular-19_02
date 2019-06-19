import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class PersistenceService {

  url = 'https://angular-recipes-luka.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private authService: AuthService) { }

  saveRecipes(recipes: RecipeModel[]) {
    return this.http.put(this.getUrlWithToken(), recipes);
  }

  getRecipes() {
    return this.http.get<RecipeModel[]>(this.getUrlWithToken())
      .map(recipes => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      });
  }

  getUrlWithToken() {
    return this.url + '?auth=' + this.authService.getToken();
  }

}
