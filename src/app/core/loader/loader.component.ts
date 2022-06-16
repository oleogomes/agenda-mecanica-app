import { LoaderService } from './loader.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  template: '<ngx-loading [show]="loading | async"></ngx-loading>'
})
export class LoaderComponent implements OnInit {

  public loading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
