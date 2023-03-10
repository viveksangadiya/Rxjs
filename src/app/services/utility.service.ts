import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pluck, take, tap, toArray } from 'rxjs';

export interface ResponseData {
  id: number,
  title: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // product: any = []
  // produts!: ResponseData[]
  constructor(private http: HttpClient) { }

  // getData(): Observable<ResponseData[]> {
  //   return this.http.get<{ products: ResponseData[] }>("https://dummyjson.com/products")
  //     .pipe(
  //       take(1),

  //       tap(res => console.log('products', res)),
  //       // pluck('title'),

  //       map(res => {
  //         res.products = res.products.map(p => ({ ...p, 'title': p.title.toUpperCase() }))
  //         return res.products
  //       }),
  //     )
  // }

    getData():Observable<ResponseData[]>{
      return this.http.get<{ products: ResponseData[] }>('https://dummyjson.com/products')
      .pipe(map((res) =>res.products));
    }



  getSearchData(search:any):Observable<ResponseData[]> {
    // return this.http.get<any>('https://dummyjson.com/products/search?q=phone')
    return this.http.get<any>('https://dummyjson.com/products/search' + '?q=' + search).pipe(map((res) =>res.products));
    // .subscribe((res:any) => console.log(res))
  }

  print(val: string, id: string) {
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(id)?.appendChild(el)
  }
}
