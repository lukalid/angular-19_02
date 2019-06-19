import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class PersistenceService {

  url = 'https://angular-recipes-luka.firebaseio.com/recipes.json';

  constructor(private http: HttpClient) { }

  saveRecipes(recipes: RecipeModel[]) {
    return this.http.put(this.url, recipes);
  }

  getRecipes() {
    return this.http.get<RecipeModel[]>(this.url)
      .map(recipes => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      });
  }

}
