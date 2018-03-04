import { OperatorService } from './../../operator.service';
import { TourOperatorCategory } from './../../tour-operator-category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'admin-tour-operator-form',
  templateUrl: './admin-tour-operator-form.component.html',
  styleUrls: ['./admin-tour-operator-form.component.css']
})
export class AdminTourOperatorFormComponent implements OnInit {
  categories$;
  
  constructor( 
    private route: ActivatedRoute,
    private router: Router, 
    private tourOperatorCategory: TourOperatorCategory,
    private operatorService: OperatorService) { 
    
    this.categories$ = tourOperatorCategory.getTourOperatorCategories();

    
  }
  save(operator, route: Router){
    this.operatorService.createOperator(operator);
    this.router.navigate(['admin/tour-operators'])
    
  }

  ngOnInit() {
  }

}
