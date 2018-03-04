
import { OperatorService } from './../../operator.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'admin-tour-operators',
  templateUrl: './admin-tour-operators.component.html',
  styleUrls: ['./admin-tour-operators.component.css']
})
export class AdminTourOperatorsComponent implements OnInit {
  tourOperators$

  constructor( private operatorService: OperatorService) {
    this.tourOperators$ = operatorService.getTourOperators() 
   
   }

   filterOperators(query: string){
    //display to see if it works 
    console.log(query);
   }

  ngOnInit() {
  }

}
