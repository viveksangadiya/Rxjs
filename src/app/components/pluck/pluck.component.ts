import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeMap, of,concatMap } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit{
  
  ngOnInit(): void {
    const getData = (param:any) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      )
    }

    from([1,2,3,4]).pipe(
      concatMap(param=>getData(param))
    ).subscribe(res=>console.log(res))


    from([1,2,3,4]).pipe(
      mergeMap(param=>getData(param))
    ).subscribe(res=>console.log(res))
  }
}


