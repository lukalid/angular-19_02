import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {PersistenceService} from '../shared/persistence.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private persistenceService: PersistenceService, private recipeService: RecipeService,
              private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.persistenceService.saveRecipes(this.recipeService.getRecipes()).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/recipes']);
  }

  onFetchData() {
    this.persistenceService.getRecipes().subscribe(
      (recipes => this.recipeService.setRecipes(recipes))
    );
    this.router.navigate(['/recipes']);
  }

  onLogout() {
    this.authService.logout();
  }

}
