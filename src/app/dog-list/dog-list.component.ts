import { Component, Input, OnInit } from '@angular/core';
import { DogsService} from '../dogs.service';
import { LikeCounter } from '../like-counter';
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

  incrementLike(): void{

  }

  getUpdates() {
    return this.dogsService.all().subscribe(data => {this.dogs = data});
  }

}
