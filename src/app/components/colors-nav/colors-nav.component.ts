import { Component, OnInit } from '@angular/core';
import { ChangeColorsService } from 'src/app/services/change-colors.service';

@Component({
  selector: 'app-colors-nav',
  templateUrl: './colors-nav.component.html',
  styleUrls: ['./colors-nav.component.css']
})
export class ColorsNavComponent {
  text_color!: string;
  background_color!: string;
  primary_color!: string;
  secondary_color!: string;
  
  constructor(private changeColorsService: ChangeColorsService) {}

  ngOnInit(): void {
    this.randomizeColors();
  }

  randomizeColors() {
    this.text_color = this.getRandomColor();
    this.background_color = this.getRandomColor();
    this.primary_color = this.getRandomColor();
    this.secondary_color = this.getRandomColor();

    this.changeColorsService.changeColors(this.text_color, this.background_color, this.primary_color, this.secondary_color);
  }

  getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
