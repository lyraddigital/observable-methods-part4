import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/every';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/isEmpty';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/max';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/min';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showEvery = false;
  everyResult = '';

  showExhaust = false;
  exhaustResult = '';

  showExpand = false;
  expandResult = '';

  showFilter = false;
  filterResult = '';

  showFind = false;
  findResult = '';

  showFindIndex = false;
  findIndexResult = '';

  showFirstOne = false;
  firstOneResult = '';

  showFirstTwo = false;
  firstTwoResult = '';

  showIgnoreElements = false;
  ignoreElementsResult = '';

  showIsEmpty = false;
  isEmptyResult = '';

  showLastOne = false;
  lastOneResult = '';

  showLastTwo = false;
  lastTwoResult = '';

  showMap = false;
  mapResult = '';

  showMapTo = false;
  mapToResult = '';

  showMaxOne = false;
  maxOneResult = '';

  showMaxTwo = false;
  maxTwoResult = '';

  showMerge = false;
  mergeResult = '';

  showMinOne = false;
  minOneResult = '';

  showMinTwo = false;
  minTwoResult = '';

  showPartition = false;
  partitionOneResult = '';
  partitionTwoResult = '';
  
  ngOnInit() {
     /*
     this.showEvery = true;
     
     Observable.of(1, 2, 3, 4, 5, 6)
               .every(x => x < 5)
               .subscribe(value => {
                 this.everyResult = value.toString();
               });
      */

      /*
      this.showExhaust = true;
      
      var clicks = Observable.fromEvent(document, 'click');
      var higherOrder = clicks.map((ev) => Observable.interval(1000).take(4));
      var result = higherOrder.exhaust();
      
      result.subscribe(value => this.exhaustResult += value.toString());
      */

      /*
      this.showExpand = true;

      var clicks = Observable.fromEvent(document, 'click');
      var powersOfTwo = clicks
                          .mapTo(1)
                          .expand(x => Observable.of(2 * x).delay(1000))
                          .take(10);
      
      powersOfTwo.subscribe(value => this.expandResult += `${value} `);
      */

      /*
      this.showFilter = true;
       
      Observable.of(1, 2, 3, 4, 5, 6)
                .filter(x => x % 2 == 0)
                .subscribe(value => {
                  this.filterResult += `${value} `;
                });
      */

      /*
      this.showFind = true;
       
      Observable.of(1, 2, 3, 4, 5, 6)
                .find(x => x % 2 == 0)
                .subscribe(value => {
                  this.findResult += `${value} `;
                });
      */

      /*
      this.showFindIndex = true;
       
      Observable.of(1, 2, 3, 4, 5, 6)
                .findIndex(x => x % 2 == 0)
                .subscribe(value => {
                  this.findIndexResult += `${value} `;
                });
      */

      /*
      this.showFirstOne = true;
       
      Observable.of(1, 2, 3, 4, 5, 6)
                .first()
                .subscribe(value => {
                  this.firstOneResult += `${value} `;
                });
      */

      /*
      this.showFirstTwo = true;
       
      Observable.of(1, 2, 3, 4, 5, 6)
                .first(x => x % 2 == 0)
                .subscribe(value => {
                  this.firstTwoResult += `${value} `;
                });
      */

      /*
      this.showIgnoreElements = true;
       
      Observable.of(1, 2, 3, 4, 5, 6)
                .ignoreElements()
                .subscribe(value => {
                  this.ignoreElementsResult += `${value} `;
                }, null,
                () => { this.ignoreElementsResult += 'Completed successfully'; });
      */
      
      /*
      this.showIsEmpty = true; 

      Observable.of(1, 2, 3, 4, 5, 6)
                .isEmpty()
                .subscribe(value => {
                  this.isEmptyResult += `${value}`;
                });
      */

      /*
      this.showLastOne = true;
       
      Observable.of(1, 2, 3, 4, 5, 6, 7)
                .last()
                .subscribe(value => {
                  this.lastOneResult += `${value} `;
                });
      */

      /*
      this.showLastTwo = true;
       
      Observable.of(1, 2, 3, 4, 5, 6, 7)
                .last(x => x % 2 == 0)
                .subscribe(value => {
                  this.lastTwoResult += `${value} `;
                });
      */

      /*
      this.showMap = true;
       
      Observable.of(1, 2, 3, 4, 5, 6, 7)
                .map(x => x * 10)
                .subscribe(value => {
                  this.mapResult += `${value} `;
                });
      */

      /*
      this.showMapTo = true;
       
      Observable.fromEvent(document, 'click')
                .mapTo(3)
                .subscribe(value => {
                  this.mapToResult += `${value} `;
                });
      */

      /*
      this.showMaxOne = true;
       
      Observable.of(1,2,4,38,25,107,4,2,8)
                .max()
                .subscribe(value => {
                  this.maxOneResult = `${value} `;
                });
      */
      
      /*
      this.showMaxTwo = true;

      Observable.of(
                    {"name": "Daryl", "age": 26}, 
                    {"name": "Michael", "age": 54},
                    {"name": "Kobe", "age": 38})
                .max<any>((playerOne: any, playerTwo: any) => playerOne.age > playerTwo.age ? 1 : -1)
                .subscribe(value => {
                  this.maxTwoResult = `${value.name}`;
                });
      */
      
      /*
      this.showMerge = true;

      var timer1 = Observable.interval(1000).take(10);
      var timer2 = Observable.interval(2000).take(6);

      timer1.merge(timer2)
            .subscribe(value => this.mergeResult += `${value} `);
      */

      /*
      this.showMinOne = true;
       
      Observable.of(-7,2,4,38,25,107,4,2,8)
                .min()
                .subscribe(value => {
                  this.minOneResult = `${value} `;
                });
      */
      
      /*
      this.showMinTwo = true;
      
      Observable.of(
                    {"name": "Daryl", "age": 26}, 
                    {"name": "Michael", "age": 54},
                    {"name": "Kobe", "age": 38})
                .min<any>((playerOne: any, playerTwo: any) => playerOne.age > playerTwo.age ? 1 : -1)
                .subscribe(value => {
                  this.minTwoResult = `${value.name}`;
                });
      */

      /*
      this.showPartition = true;

      var intervalObs = Observable.interval(1000).take(20);
      var partitions = intervalObs.partition(value => value % 2 == 0);
      var partitionOne = partitions[0];
      var partitionTwo = partitions[1];

      partitionOne.subscribe(value => this.partitionOneResult += `${value} `);
      partitionTwo.subscribe(value => this.partitionTwoResult += `${value} `);
      */
  }
}
