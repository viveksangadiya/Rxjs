import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { take,map, pluck, toArray } from 'rxjs/operators';
import { ResponseData, UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private utilityService:UtilityService){}

  resData!:ResponseData[];
  ngOnInit() {
     this.utilityService.getData().subscribe((res:any)=>{
      this.resData = res;
      console.log(res);
     })
  }
  
}
