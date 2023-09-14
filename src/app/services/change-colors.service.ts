import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeColorsService {

  constructor() { }

  changeColors(text_color: string, background_color: string, primary_color: string, secondary_color: string) {
    document.documentElement.style.setProperty('--text-color', text_color);
    document.documentElement.style.setProperty('--background-color', background_color);
    document.documentElement.style.setProperty('--primary-color', primary_color);
    document.documentElement.style.setProperty('--secondary-color', secondary_color);

    document.body.style.backgroundColor = background_color;
    
    const coloredText = document.getElementsByClassName('colored-text');
    if(coloredText.length > 0) {
      for(let i = 0; i < coloredText.length; i++) {
        const element = coloredText[i] as HTMLElement;
        element.style.color = text_color;
        element.style.fill = text_color;
      }
    }

    const gradientText = document.getElementsByClassName('gradient-text');
    if(gradientText.length > 0) {
      for(let i = 0; i < gradientText.length; i++) {
        const element = gradientText[i] as HTMLElement;
        element.style.background = `linear-gradient(120deg, ${primary_color}, ${secondary_color})`;
        element.style.webkitBackgroundClip = 'text';
        element.style.webkitTextFillColor = 'transparent';
      }
    }

    const backgroundColor = document.getElementsByClassName('background-color');
    if(backgroundColor.length > 0) {
      for(let i = 0; i < backgroundColor.length; i++) {
        const element = backgroundColor[i] as HTMLElement;
        element.style.fill = background_color;
      }
    }

    const primaryColor = document.getElementsByClassName('primary-color');
    if(primaryColor.length > 0){
      for(let i = 0; i < primaryColor.length; i++) {
        const element = primaryColor[i] as HTMLElement;
        element.style.color = primary_color;
        element.style.fill = primary_color;
      }
    }

    const secondaryColor = document.getElementsByClassName('secondary-color');
    if(secondaryColor.length > 0){
      for(let i = 0; i < secondaryColor.length; i++) {
        const element = secondaryColor[i] as HTMLElement;
        element.style.color = secondary_color;
        element.style.fill = secondary_color;
      }
    }
  }
}
