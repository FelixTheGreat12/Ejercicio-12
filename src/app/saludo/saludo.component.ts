import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  mensaje : String = "Esto es un saludo";
  nombre: String = 'Felipe'
  edad = 20

}
