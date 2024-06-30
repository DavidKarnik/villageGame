import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-village-image',
  templateUrl: './village-image.component.html',
  styleUrls: ['./village-image.component.css']
})
export class VillageImageComponent implements OnInit {
  @Input() mainLevel: number = 1;
  @Input() smithLevel: number = 1;
  @Input() barracksLevel: number = 1;

  villageImage = '';
  mainImage = '';
  smithImage = '';
  barracksImage = '';

  ngOnInit(): void {
    this.updateImages();
  }

  updateImages(): void {
    this.villageImage = `assets/village.png`;
    this.mainImage = `assets/main${this.mainLevel}.png`;
    this.smithImage = `assets/smith${this.smithLevel}.png`;
    this.barracksImage = `assets/barracks${this.barracksLevel}.png`;

    console.log('Village image:', this.villageImage);
    console.log('Main image:', this.mainImage);
    console.log('Smith image:', this.smithImage);
    console.log('Barracks image:', this.barracksImage);
  }
}
