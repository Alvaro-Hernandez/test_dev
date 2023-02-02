import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-comunicacion-c',
  templateUrl: './comunicacion-c.component.html',
  styleUrls: ['./comunicacion-c.component.css']
})
export class ComunicacionCComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  change ={
    name:''
  }

  changeNamed(){
    this.dataService.changeNamed(this.change.name);
    console.log(this.change.name);
  }
}
