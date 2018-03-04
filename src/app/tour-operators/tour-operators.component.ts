
import { OperatorService } from './../operator.service';
import { Component, OnInit } from '@angular/core';
import { TourOperatorCategory } from '../tour-operator-category.service';

@Component({
  selector: 'tour-operators',
  templateUrl: './tour-operators.component.html',
  styleUrls: ['./tour-operators.component.css']
})
export class TourOperatorsComponent {
  tourOperators$;
  categories$;

  constructor( operatorService: OperatorService, tourOperatorCategory: TourOperatorCategory) { 
    this.tourOperators$ = operatorService.getTourOperators()
    this.categories$ = tourOperatorCategory.getTourOperatorCategories()

  }

}
