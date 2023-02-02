import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/paisModel';
import { PaisService } from 'src/app/services/pais.service';
@Component({
  selector: 'app-paises-c',
  templateUrl: './paises-c.component.html',
  styleUrls: ['./paises-c.component.css']
})
export class PaisesCComponent implements OnInit {

  pais!:Pais;


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getPais(paisId: string){
    this.paisService.getPais(paisId).subscribe((data : Pais)=>{
      this.pais = data;
    })
  }

}
