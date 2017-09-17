import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie('Test Recipie',
      'This is simply a test',
      'http://33.media.tumblr.com/6313ee7427712bd33fe8c6b1e65bcf88/tumblr_ndyidosrjN1qhvzyio1_500.jpg'),
    new Recipie('Test Recipie',
      'This is simply a test',
      'http://33.media.tumblr.com/6313ee7427712bd33fe8c6b1e65bcf88/tumblr_ndyidosrjN1qhvzyio1_500.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
