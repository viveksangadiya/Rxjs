import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  @ViewChild('addBtn') addBtn:ElementRef|any

  constructor(private utilityService:UtilityService){}
 
 ngOnInit(){
  const obj1=of('vivek','sagar','mit')

  obj1.subscribe(res=>{
    console.log(res)
    this.utilityService.print(res,'elementlist1')
  })
 }

 ngAfterViewInit(): void {
  let count=1;
  fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
    let countVal='video' + count++
    this.utilityService.print(countVal,'elementlist')
  })
 }
 
}
