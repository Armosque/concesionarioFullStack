import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutomovilService } from 'src/app/services/automovil.service';
import {Automovil} from '../../interfaces/automovil'


@Component({
  selector: 'app-automoviles-form',
  templateUrl: './automoviles-form.component.html',
  styleUrls: ['./automoviles-form.component.css']
})
export class AutomovilesFormComponent implements OnInit {

  automovil:Automovil={
    marca: '',
    modelo: '',
    ano: '',
    vendedor_id:0,
    cliente_id:0,

}

  constructor(
    private automovilService:AutomovilService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  submitAutomovil(){
    this.automovilService.createAutomovil(this.automovil)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.router.navigate(['/'])

        },
        error:(err)=>console.log(err)
      })

  }
}
