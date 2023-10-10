import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData | any
  attributesTypes:string[] = ['FIRE', 'ROCK']

  constructor(
    private service: PokemonService
  ){

  }
  ngOnInit(): void {
    this.service.getPokemon("charirard").subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types:res.types
          }

          console.log(res)

        },
        error: (err) => console.log(err)
      }
    )
  }

}
