import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
  public isDarkTheme$: Observable<boolean> = new Observable<boolean>();
  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isDarkTheme$ = this.isDarkThemeSubject.asObservable();
  }

  public setLightTheme(): void {
    document.documentElement.classList.remove('dark');
    this.isDarkThemeSubject.next(false);
  }

  public settDarkTheme(): void {
    document.documentElement.classList.add('dark');
    this.isDarkThemeSubject.next(true);
  }

}
