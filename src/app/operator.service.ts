import { TourOperator } from './models/tour-operator';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OperatorService {

  constructor( private db: AngularFireDatabase) { }

  createOperator(operator){
    return this.db.list('/tour-operators').push(operator);
  }

  getTourOperators(){
    //return this.db.list('/tour-operators').valueChanges()
    return this.db.list('/tour-operators/').valueChanges();
  }

  getTourOperator(operatorId){
    return this.db.list('/tour-operators/'+ operatorId);
  }

  filterOperators(query: string){
    //console.log(query);
  }

}
