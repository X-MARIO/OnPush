import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, Inject,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {factorial, ILogConfig, LOGGED_TOKEN} from '../../app.component';

@Component({
  selector: 'app-component1-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1-2.component.html',
  styleUrl: './component1-2.component.scss'
})
export class Component12Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public readonly title: string = 'Default';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component12Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component12Component ngOnInit');
  }

  public ngDoCheck(): void {
    this.counter = factorial(10000);
    this.config.ngDoCheck && console.log('>> Component12Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component12Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component12Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component12Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component12Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component12Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component12Component click');
    this.counter++;
  }
}
