import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../interfaces/automovil'; 
import { AutomovilService } from 'src/app/services/automovil.service';

@Component({
  selector: 'app-automoviles-list',
  templateUrl: './automoviles-list.component.html',
  styleUrls: ['./automoviles-list.component.css']
})
export class AutomovilesListComponent implements OnInit {

  constructor(private automovilService:AutomovilService) { }

  automoviles: Automovil[] = [];

  ngOnInit(): void {
    this.getAutomoviles()
  }

  getAutomoviles(){
    this.automovilService.getAutomoviles()
    .subscribe({
      next:res=>{this.automoviles= res
        console.log(res)
        console.log('Hola Jesus')},
      error:err=>console.log(err)
    })
  }

}
