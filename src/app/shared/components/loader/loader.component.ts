import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public show: boolean = true;

  constructor() {

  }

  ngOnInit() { }

  ngOnDestroy() { }

}
