import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class TourOperatorCategory{

  constructor(private db: AngularFireDatabase) { }

  getTourOperatorCategories(){
    return this.db.list('/categories').valueChanges()
  }


}
