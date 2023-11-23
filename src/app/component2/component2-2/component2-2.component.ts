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
import {ILogConfig, LOGGED_TOKEN} from '../../app.component';

@Component({
  selector: 'app-component2-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2-2.component.html',
  styleUrl: './component2-2.component.scss'
})
export class Component22Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public readonly title: string = 'Default';

  public counter: number = 0;

  public constructor(
    @Inject(LOGGED_TOKEN) private readonly config: ILogConfig,
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.config.ngOnChanges && console.log('>> Component22Component ngOnChanges')
  }

  public ngOnInit(): void {
    this.config.ngOnInit && console.log('>> Component22Component ngOnInit');
  }

  public ngDoCheck(): void {
    this.config.ngDoCheck && console.log('>> Component22Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    this.config.ngAfterContentInit && console.log('>> Component22Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    this.config.ngAfterContentChecked && console.log('>> Component22Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    this.config.ngAfterViewInit && console.log('>> Component22Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    this.config.ngAfterViewChecked && console.log('>> Component22Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    this.config.ngOnDestroy && console.log('>> Component22Component ngOnDestroy');
  }

  public onAdd($event: MouseEvent) {
    console.log('>> Component22Component click');
    this.counter++;
  }
}
