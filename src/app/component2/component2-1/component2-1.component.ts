import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {factorial, ILogConfig, LOGGED_TOKEN} from '../../app.component';
import {Component22Component} from '../component2-2/component2-2.component';
import {Component211Component} from './component2-1-1/component2-1-1.component';
import {Component212Component} from './component2-1-2/component2-1-2.component';

@Component({
  selector: 'app-component2-1',
  standalone: true,
  imports: [CommonModule, Component22Component, Component211Component, Component212Component],
  templateUrl: './component2-1.component.html',
  styleUrl: './component2-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component21Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public readonly title: string = 'OnPush';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component21Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component21Component ngOnInit');
  }

  public ngDoCheck(): void {
    factorial(1000);
    this.config.ngDoCheck && console.log('>> Component21Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component21Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component21Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component21Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component21Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component21Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component21Component click');
    this.counter++;
  }
}
