import { Component, SimpleChanges, OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, AfterContentChecked, DoCheck, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fix: Updated styleUrl to styleUrls
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, AfterContentChecked, DoCheck{
  constructor() {
    console.log('HeaderComponent constructor');
  }

  ngOnInit(): void {
    console.log('HeaderComponent ngOnInit');
  }

  ngDoCheck(): void {
    console.log('HeaderComponent ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HeaderComponent ngOnChanges');
  }

  ngAfterContentChecked(): void {
    console.log('HeaderComponent ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('HeaderComponent ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('HeaderComponent ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('HeaderComponent ngOnDestroy');
  }
}
