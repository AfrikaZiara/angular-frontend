import { OperatorService } from './../../operator.service';
import { TourOperatorCategory } from './../../tour-operator-category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

@Component({
  selector: 'admin-tour-operator-form',
  templateUrl: './admin-tour-operator-form.component.html',
  styleUrls: ['./admin-tour-operator-form.component.css']
})
export class AdminTourOperatorFormComponent implements OnInit {
  categories$;
  
  constructor( private router: Router, tourOperatorCategory: TourOperatorCategory, private operatorService: OperatorService) { 
    this.categories$ = tourOperatorCategory.getTourOperatorCategories();
    //this.router.navigate(['admin/tour-operators']);
  }
  save(operator, route: Router){
    this.operatorService.createOperator(operator);
    this.router.navigate(['admin/tour-operators'])
    
  }

  ngOnInit() {
  }

}
