import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[]=[
    new Card('Displacement, Velocity and Speed','Physics 2','assets/displacement-card.jpg',6,3,2,15,20,[],0,'',true,true,false),
    new Card('Introduction to Biology: Microorganisms and how they affec...','Biology','assets/biology-card.jpg',4,1,5,16,22,["All Classes"],300,'',true,true,false),
    new Card('Introduction to High School Mathematics','Mathematics','assets/maths-card.jpg',8,3,0,0,0,["Mr.Frank's Class A"],44,'14-Oct-2019 - 20-Oct-2020',false,true,true),
    new Card('Acceleration','Physics','assets/acceleration-card.jpg',7,2,4,18,24, ["Mr.Frank's Class B"],50,'21-Jan-2020 - 21-Aug-2020',true,true,false),
  ];
  sortByName: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  sortName(){
    
  }

}
