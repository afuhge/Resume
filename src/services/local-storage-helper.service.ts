import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageHelperService {
  public static LANGUAGE: string = 'language';
  public static THEME: string = 'theme';

  public setLanguageItem(item: string): void {
    localStorage.setItem(LocalStorageHelperService.LANGUAGE, item);
  }

  public getLanguageItem(): string {
    return localStorage.getItem(LocalStorageHelperService.LANGUAGE);
  }

  public setThemeItem(item: string): void {
    localStorage.setItem(LocalStorageHelperService.THEME, item);
  }

  public getThemeItem(): string {
    return localStorage.getItem(LocalStorageHelperService.THEME);
  }
}
