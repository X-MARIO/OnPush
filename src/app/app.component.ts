import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Inject,
  InjectionToken,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';

export interface ILogConfig {
  readonly ngOnChanges: boolean;
  readonly ngOnInit: boolean;
  readonly ngDoCheck: boolean;
  readonly ngAfterContentInit: boolean;
  readonly ngAfterContentChecked: boolean;
  readonly ngAfterViewInit: boolean;
  readonly ngAfterViewChecked: boolean;
  readonly ngOnDestroy: boolean;
}

export const config: ILogConfig = {
  ngAfterContentChecked: false,
  ngAfterContentInit: false,
  ngAfterViewChecked: false,
  ngAfterViewInit: false,
  ngDoCheck: true,
  ngOnChanges: false,
  ngOnDestroy: false,
  ngOnInit: false

}

export const LOGGED_TOKEN: InjectionToken<ILogConfig> = new InjectionToken<ILogConfig>('LOGGED_TOKEN');

export const factorial: (n: number) => number =  (n : number) => {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Component1Component, Component2Component, TuiRootModule, TuiDialogModule, TuiAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: LOGGED_TOKEN,
    useValue: config,
  },
      {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}
],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public readonly title: string = 'Default';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> AppComponent ngOnChanges');
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> AppComponent ngOnInit');
  }

  public ngDoCheck(): void {
    // this.counter = factorial(1000);
    this.config.ngDoCheck && console.log('>> AppComponent ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> AppComponent ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> AppComponent ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> AppComponent ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> AppComponent ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> AppComponent ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> AppComponent click');
    this.counter++;
  }
}
