import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PokemonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonProvider {

  pokemonApiUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) {
    console.log('Hello PokemonProvider Provider');
  }

  getPokemon(id): Observable<any>{
    return this.http.get(this.pokemonApiUrl + 'pokemon/' + id)
    .map(res=>res);
  }

}
