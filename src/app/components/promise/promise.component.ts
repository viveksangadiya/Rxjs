import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit{

  promiseVal:any='';

  dell:any={
    'brand':'dell',
    'disk' : '4 Gb'
  }

  ngOnInit(){
    let buyLaptop=new Promise((resolve,reject)=>{
      //  resolve('resolve success')
      if(this.dellAvailable()){
        return setTimeout(()=>{
          resolve(this.dell)
        },3000)
      }else if(this.hpAvailable()){
        return setTimeout(()=>{
          resolve('hp purchased')
        },3000)
      }else{
        return setTimeout(()=>{
          reject('not found')
        },3000)
      }
    })

    buyLaptop.then((res)=>{
      this.promiseVal=res
      this.dell=res
      this.promiseVal=this.dell
       console.log(res);
    }).catch((res)=>{
      this.promiseVal=res
      console.log(res)
    })
  }

  dellAvailable(){
    return true
  }

  hpAvailable(){
    return true
  }
}
