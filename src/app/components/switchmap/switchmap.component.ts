import { AfterViewInit, Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, exhaustAll, exhaustMap, map, mergeMap, shareReplay, switchMap, tap } from 'rxjs';
import { ResponseData, UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm') myForm: NgForm | undefined;

  constructor(private us: UtilityService,private route: ActivatedRoute,private router:Router) {}
  prod: ResponseData[] = [];
  searchProd:ResponseData[]=[];
  length:number=0;
  search:string='';
  searchQuery : any
  ngAfterViewInit(): void {
    const formValue = this.myForm?.valueChanges;
    formValue?.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(res => {
        this.search=res
        console.log(this.search)
      }),
      shareReplay(3)
    ).subscribe((res) => {
      this.us.getSearchData(res.search).subscribe(resData => {
        this.searchProd=resData;
        this.length=resData.length
        console.log("Search",res.search);
        this.router.navigate(['/switchmap'], {queryParams:{q:res.search}})
      })
    })
  }

  ngOnInit() {
    this.us.getData().subscribe(res => {
      this.prod = res;
      console.log(this.prod);
    })

    // this.route.queryParams.subscribe(qp =>{
    //   this.searchQuery = qp['searchProd'];
    // })
  }

}
