import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
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
import {Component21Component} from './component2-1/component2-1.component';
import {Component22Component} from './component2-2/component2-2.component';
import {factorial, ILogConfig, LOGGED_TOKEN} from '../app.component';
import {luMakePure} from '@solit/lucidus-core';
import {Observable, of} from 'rxjs';
import {tuiPure} from '@taiga-ui/cdk';
import {LogPipe} from '../pipes/log.pipe';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule, Component21Component, Component22Component, LogPipe],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Component2Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input({
    required: true,
  }) public input: boolean = false;

  @Input({
    required: true,
  }) public parentCounter: number = -1;


  public readonly title: string = 'Default';

  public counter: number = 0;

  @luMakePure
  public get getFactorial(): number {
    console.log('>> getFactorial')
    return factorial(100);
  }

  @luMakePure
  public funcFactorial(): number {
    console.log('>> funcFactorial');
    return factorial(100);
  }

  @luMakePure
  public funcFactorialWithParams(num: number): number {
    console.log('>> funcFactorialWithParams', num);
    return num;
  }

  @luMakePure
  public funcFactorialWithParamsTaigaUI(num: number): number {
    console.log('>> funcFactorialWithParamsTaigaUI', num);
    return num;
  }


  @luMakePure
  public asyncFactorial(): Observable<number> {
    console.log('>> asyncFactorial');
    return of(factorial(100));
  }

  @luMakePure
  public asyncFactorialWithParams(num: number): Observable<number> {
    console.log('>> asyncFactorialWithParams', num);
    return of(num);
  }

  @tuiPure
  public asyncFactorialWithParamsTaigaUI(num: number): Observable<number> {
    console.log('>> asyncFactorialWithParamsTaigaUI', num);
    return of(num);
  }

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component2Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component2Component ngOnInit');
  }

  public ngDoCheck(): void {
    this.counter = factorial(1000);
    this.config.ngDoCheck && console.log('>> Component2Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component2Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component2Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component2Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component2Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component2Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component2Component click');
    this.counter++;
  }
}
