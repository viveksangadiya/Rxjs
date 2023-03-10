import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit{

  videoSubscription:Subscription|any;
  msg:string='';
  constructor(private utilityService:UtilityService){}
  ngOnInit(): void {
   const broadCastVideo=interval(2000);
   this.videoSubscription=
   broadCastVideo.subscribe(res=>{
    console.log(res);
    this.msg='video' + res
    this.utilityService.print(this.msg,'elementlist1')
    if(res>=5){
      this.videoSubscription.unsubscribe();  
    }
    
   })
  }
  
   
}
