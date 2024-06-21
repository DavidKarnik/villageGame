import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('gridContainer') gridContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  private scale = 1;
  private isDragging = false;
  private startX = 0;
  private startY = 0;

  ngAfterViewInit(): void {
    console.log("Map component initialized.");
    if (!this.gridContainer || !this.gridContainer.nativeElement) {
      console.error("Grid container not found");
      return;
    }
    this.generateGrid(10, 10);
    this.initDragAndZoom();
  }

  generateGrid(rows: number, cols: number): void {
    const gridElement = this.gridContainer.nativeElement;
    gridElement.innerHTML = ''; // Vyprázdněte existující obsah, pokud je to třeba
    console.log("Generating grid...");
    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell'; // Přidejte třídu ke každému divu
      // cell.style.backgroundColor = 'black';
      // cell.style.border = '1px solid #000000';
      gridElement.appendChild(cell);
    }
    console.log("Grid generated.");
  }


  initDragAndZoom(): void {
    const mapElement = this.mapContainer.nativeElement;

    mapElement.addEventListener('wheel', (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY) * -0.1;
      this.scale += delta;
      this.scale = Math.min(Math.max(.125, this.scale), 4);
      this.gridContainer.nativeElement.style.transform = `scale(${this.scale})`;
    });

    mapElement.addEventListener('mousedown', (event) => {
      this.isDragging = true;
      this.startX = event.pageX - mapElement.offsetLeft;
      this.startY = event.pageY - mapElement.offsetTop;
    });

    mapElement.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    mapElement.addEventListener('mousemove', (event) => {
      if (this.isDragging) {
        const x = event.pageX - mapElement.offsetLeft;
        const y = event.pageY - mapElement.offsetTop;
        const dx = x - this.startX;
        const dy = y - this.startY;
        mapElement.scrollLeft -= dx;
        mapElement.scrollTop -= dy;
      }
    });
  }
}
