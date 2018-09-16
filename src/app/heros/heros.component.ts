import { Component, OnInit } from '@angular/core';
import { Heros } from './heros';
import { HerosService } from './heros.service';
// import { HEROS } from './mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
  // ici pas besoin de définir HerosService comme provider : HerosService est défini pour toute l'application dans app.module.ts
})
export class HerosComponent implements OnInit {

  // Exercice 1.3 (utiliser une propriété) : heros = 'Windstorm';

  // Eercice 1.4 (utiliser une classe) :
  /*heros: Heros = {
    id: 1,
    nom: 'Windstorm'
  };*/

  // Exercice 1.6 (utiliser le fichier externe mock-heros)
  /*heros = HEROS;
  selectedHeros: Heros;*/

  // Exercice 1.7 utiliser le service plutôt que mock-heros directement
  heros: Heros[];
  selectedHeros: Heros;

  onSelect(heros: Heros): void {
    this.selectedHeros = heros;
  }

  // Exercice 1.7 Retourne la liste de héros par le service
  getHeros(): void {
    this.herosService.getHeros()
    // appel asynchrone : on s'abonne et quand on reçoit le résultat on le traite
      .subscribe(heros => this.heros = heros);
  }

  constructor(private herosService: HerosService) { }

  ngOnInit() {
    // Exercice 1.7 On veut avoir la liste quand la page est chargée
    this.getHeros();
  }

}
