import { Component, Input, OnInit } from '@angular/core';
import { DogsService} from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})

export class DogListComponent implements OnInit {

  @Input() dog: Dog;

  title: string = 'Dog List';
  dogs: Dog[] = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates() {
    return this.dogsService.all().subscribe(data => {this.dogs = data});
  }

  incrementLike(id: string): void{
    for(let dog in this.dogs) {
      if(this.dogs[dog].id === id) {
        this.dogs[dog].likeCount++;
      }
    }
  }

  addFavorite(id:string): void{
    for(let dog in this.dogs) {
      if(this.dogs[dog].id === id) {
        if (this.dogs[dog].favorite) {
          this.dogs[dog].favorite = false;  
        } else {
          this.dogs[dog].favorite = true;
        }
      }
    }
  }

  // myFavorites(): void{
  //   for(let fav in this.dogs) {
  //     if(this.dogs[fav].favorite) {
  //         -- create a new favorite object
  //       }
  //     }
  //   }
  //   -- return list??
  // }

  
}
