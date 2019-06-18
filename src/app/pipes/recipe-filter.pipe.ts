import { Pipe, PipeTransform } from '@angular/core';
import {RecipeModel} from '../recipes/recipe.model';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(recipes: RecipeModel[], filterString: string, propName: string): RecipeModel[] {
    if (recipes.length === 0 || filterString === '' || filterString === 'all') {
      return recipes;
    }
    const filteredRecipes: RecipeModel[] = [];
    for (const recipe of recipes) {
      if (recipe[propName].startsWith(filterString)) {
        filteredRecipes.push(recipe);
      }
    }
    return filteredRecipes;
  }

}
