import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {MapService} from './map.service';
import {Village} from '../models/village.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('gridContainer') gridContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;

  private scale = 1;
  private minScale = 0.5; // Minimální přiblížení
  private maxScale = 3;   // Maximální přiblížení
  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private lastX = 0;
  private lastY = 0;

  villages: Village[] = []; // Pole pro vesnice
  currentVillage?: Village; // Aktuální vesnice pro zobrazení informací
  infoWindowX = 0; // Pozice X pro info window
  infoWindowY = 0; // Pozice Y pro info window

  constructor(private villageService: MapService) {
  }

  ngAfterViewInit(): void {
    if (!this.gridContainer || !this.gridContainer.nativeElement) {
      console.error("Grid container not found");
      return;
    }
    this.generateGrid(10, 10);
    this.loadVillages();
    this.initDragAndZoom();
  }

  generateGrid(rows: number, cols: number): void {
    const gridElement = this.gridContainer.nativeElement;
    gridElement.innerHTML = ''; // Vyprázdněte existující obsah
    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell'; // Přidejte třídu
      gridElement.appendChild(cell);
    }
  }

  loadVillages(): void {
    this.villageService.getVillages().subscribe(villages => {
      this.villages = villages;
      this.renderVillages();
    });
  }

  renderVillages(): void {
    const gridElement = this.gridContainer.nativeElement;
    this.villages.forEach(village => {
      const index = village.position.y * 10 + village.position.x; // Předpokládá 10x10 mřížku
      const cell = gridElement.children[index] as HTMLElement;
      if (cell) {
        const svgIcon = this.createVillageIcon();
        cell.appendChild(svgIcon); // Přidání SVG ikony do buňky

        // Přidání událostí pro zobrazení okénka s informacemi
        cell.addEventListener('mouseenter', (event) => this.showInfoWindow(event, village));
        cell.addEventListener('mouseleave', () => this.hideInfoWindow());
      }
    });
  }

  createVillageIcon(): SVGSVGElement {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("village-icon");

    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "black");

    svg.appendChild(circle);
    return svg;
  }

  showInfoWindow(event: MouseEvent, village: Village): void {
    // console.log("mouse enter village: " + village.name);
    this.currentVillage = village;
    // console.log("mouse enter currentVillage: " + this.currentVillage.name);
    this.infoWindowX = event.pageX + 10; // Nastavte X pozici info window
    this.infoWindowY = event.pageY + 10; // Nastavte Y pozici info window
  }

  hideInfoWindow(): void {
    this.currentVillage = undefined;
  }

  initDragAndZoom(): void {
    const mapElement = this.mapContainer.nativeElement;

    mapElement.addEventListener('wheel', (event) => {
      event.preventDefault();
      const {offsetX, offsetY} = event;
      const delta = Math.sign(event.deltaY) * -0.1;
      const oldScale = this.scale;
      const newScale = Math.min(Math.max(this.minScale, this.scale + delta), this.maxScale);
      const scaleChange = newScale / oldScale;

      // Adjust the translation to zoom towards the pointer
      const {x, y} = this.gridContainer.nativeElement.getBoundingClientRect();
      const translateX = (offsetX - x) * (1 - scaleChange);
      const translateY = (offsetY - y) * (1 - scaleChange);

      this.scale = newScale;
      this.lastX += translateX;
      this.lastY += translateY;

      this.applyTransform();
    });

    mapElement.addEventListener('mousedown', (event) => {
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
    });

    mapElement.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    mapElement.addEventListener('mousemove', (event) => {
      if (this.isDragging) {
        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;
        this.lastX += dx;
        this.lastY += dy;
        this.startX = event.clientX;
        this.startY = event.clientY;

        this.applyTransform();
      }
    });

    // Reset position and scale on window resize
    window.addEventListener('resize', () => {
      this.lastX = 0;
      this.lastY = 0;
      this.scale = 1;
      this.applyTransform();
    });
  }

  private applyTransform(): void {
    const gridElement = this.gridContainer.nativeElement;
    gridElement.style.transform = `translate(${this.lastX}px, ${this.lastY}px) scale(${this.scale})`;
  }
}
