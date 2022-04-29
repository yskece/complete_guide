import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a sample test", "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg"),
    new Recipe("A Test Recipe", "This is a sample test", "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
