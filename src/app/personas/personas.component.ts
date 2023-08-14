import { Component } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { LoggingService } from '../LogginService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  
  personas: Persona[] = [];
  
  constructor(private personasService: PersonasService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe((personas: object) => {
      this.personas = personas as Persona[];
      this.personasService.setPersonas(personas as Persona[], );
    })
  }

  agregar() {
  this.router.navigate(['personas/agregar']);
  }

}
