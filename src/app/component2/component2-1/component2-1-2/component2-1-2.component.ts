import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {factorial, ILogConfig, LOGGED_TOKEN} from '../../../app.component';
import {Component21Component} from '../component2-1.component';
import {Component22Component} from '../../component2-2/component2-2.component';

@Component({
  selector: 'app-component2-1-2',
  standalone: true,
  imports: [CommonModule, Component21Component, Component22Component],
  templateUrl: './component2-1-2.component.html',
  styleUrl: './component2-1-2.component.scss'
})
export class Component212Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input({
    required: true
  }) public input: number = 0;

  public readonly title: string = 'Default';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component212Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component212Component ngOnInit');
  }

  public ngDoCheck(): void {
    this.counter = factorial(1000);
    this.config.ngDoCheck && console.log('>> Component212Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component212Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component212Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component212Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component212Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component212Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component212Component click');
    this.counter++;
  }
}
