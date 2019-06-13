import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Cheesecake', 'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar. If there is a bottom layer, it often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.',
      'https://live.staticflickr.com/7858/47287618081_da13c082e5_b.jpg' ),
    new RecipeModel('Lemon Cake', 'Lemon Cake with Lemon Bavarian Cream is made with a moist lemon cake, alternating layers of lemon bavarian cream and lemon curd filling and lemon buttercream! It’s a wonderful mix of textures and layers and such a fun way to enjoy lemon cake!',
      'https://cdn.pixabay.com/photo/2018/09/12/11/35/apple-pie-3671925_960_720.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
