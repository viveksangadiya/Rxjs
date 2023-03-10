import { Component, OnInit } from '@angular/core';
import { ResponseData, UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
    constructor(private us:UtilityService){}
    prod: ResponseData[] = [];
    isCart=true
    searchProd:ResponseData[]=[];
    ngOnInit(): void {
        this.us.getData().subscribe(res=>{
          this.prod=res
          console.log(res);
        })
    }


    itemCount:number=0
    displayedButton=0
    
    onButtonMinusClick(){
      console.log('button minus');
      if(this.itemCount<=0){
        this.isCart=true
        this.itemCount==0

      }
      else{
        this.itemCount--;
      }
    }

    onButtonPlusClick(){
      console.log('button plus');
      this.itemCount++;
      this.isCart=false
    }

    addToCart(){
      if(this.itemCount==0){
        this.isCart=true
      }
      this.itemCount++
      this.displayedButton=this.displayedButton===1?2:1;
      this.isCart=false
    }
}
