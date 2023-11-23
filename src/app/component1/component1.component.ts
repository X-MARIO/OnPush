import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck, HostListener,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Component11Component} from './component1-1/component1-1.component';
import {Component12Component} from './component1-2/component1-2.component';
import {factorial, ILogConfig, LOGGED_TOKEN} from '../app.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule, Component11Component, Component12Component],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component1Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public readonly title: string = 'OnPush';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component1Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component1Component ngOnInit');
  }

  public ngDoCheck(): void {
    this.counter = factorial(1000);
    this.config.ngDoCheck && console.log('>> Component1Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component1Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component1Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component1Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component1Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component1Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component1Component click');
    this.counter++;
  }

  @HostListener('mouseenter')
  public mouseenter(): void {
    console.log('mouseenter')
  }
}
