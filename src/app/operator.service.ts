import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OperatorService {

  constructor( private db: AngularFireDatabase) { }

  createOperator(operator){
    return this.db.list('/tour-operators').push(operator);
  }

  getAll(){
    return this.db.list('/tour-operators');
  }

  getTourOperator(operatorId){
    this.db.list('/tour-operators/'+ operatorId);
  }

}
