import { Component, OnInit } from '@angular/core';
import { AreasService } from '../mocks/services/areas.service';
import { Area } from '../mocks/models/area';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  areas: Area[];
  constructor(private areasService: AreasService) { }

  ngOnInit() {
    this.getAreas();
  }

  getAreas() {
    return this.areasService.getAreas().subscribe((response) => {
      this.areas = response;
    })
  }
}
