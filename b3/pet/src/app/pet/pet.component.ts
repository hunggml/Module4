import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  petName = '';
  petImage = '';

  updateName(name:string) {
    this.petName = name;
  }

  updateImage(image:string) {
    this.petImage = image;
  }

}
