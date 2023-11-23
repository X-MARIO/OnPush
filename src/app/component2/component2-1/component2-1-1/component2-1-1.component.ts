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
import {ILogConfig, LOGGED_TOKEN} from '../../../app.component';
import {Component21Component} from '../component2-1.component';
import {Component22Component} from '../../component2-2/component2-2.component';

@Component({
  selector: 'app-component2-1-1',
  standalone: true,
  imports: [CommonModule, Component21Component, Component22Component],
  templateUrl: './component2-1-1.component.html',
  styleUrl: './component2-1-1.component.scss'
})
export class Component211Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public readonly title: string = 'Default';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component211Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component211Component ngOnInit');
  }

  public ngDoCheck(): void {
    this.config.ngDoCheck && console.log('>> Component211Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component211Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component211Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component211Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component211Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component211Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component211Component click');
    this.counter++;
  }
}
