
import { OperatorService } from './../../operator.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'admin-tour-operators',
  templateUrl: './admin-tour-operators.component.html',
  styleUrls: ['./admin-tour-operators.component.css']
})
export class AdminTourOperatorsComponent implements OnInit {
  operators$;

  constructor( private operatorService: OperatorService) {
    this.operators$ = this.operatorService.getAll();
    console.log(this.operators$)
   }

  ngOnInit() {
  }

}
