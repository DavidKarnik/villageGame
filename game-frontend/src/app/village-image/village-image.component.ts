import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalBuildingBarracksComponent} from "../modal-building-barracks/modal-building-barracks.component";
import {MainBuildingModalComponent} from "../modal-building-main/modal-building-main.component";
import {ModalBuildingSmithComponent} from "../modal-building-smith/modal-building-smith.component";

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

  showBuildingStats = false; // Aktuální vesnice pro zobrazení informací
  infoWindowX = 0; // Pozice X pro info window
  infoWindowY = 0; // Pozice Y pro info window
  buildingName = '';
  buildingLevel = 0;
  buildingInfo = '';


  constructor(private dialog: MatDialog) { }

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

  showInfoWindow(event: MouseEvent, name: string, level: number, info: string): void {
    this.showBuildingStats = true;
    this.infoWindowX = event.pageX + 10; // Nastavte X pozici info window
    this.infoWindowY = event.pageY + 10; // Nastavte Y pozici info window
    this.buildingName = name;
    this.buildingLevel = level;
    this.buildingInfo = info;
  }

  hideInfoWindow(): void {
    this.showBuildingStats = false;
  }

  // Otevření modálního okna
  openMainBuildingModal(): void {
    this.dialog.open(MainBuildingModalComponent, {
      width: '70%',
      height: '70%'
    });
  }

  openSmithyModal(): void {
    this.dialog.open(ModalBuildingSmithComponent, {
      width: '70%',
      height: '70%'
    });
  }

  openBarracksModal(): void {
    this.dialog.open(ModalBuildingBarracksComponent, {
      width: '70%',
      height: '70%'
    });
  }
}

