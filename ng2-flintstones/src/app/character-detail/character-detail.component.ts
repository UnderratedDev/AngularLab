import { Component, OnInit, Input } from '@angular/core';
import { CartoonCharacter } from '../cartoon-character'; 
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CartoonCharacterService } from '../cartoon-character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterDetailComponent implements OnInit {

  constructor(
    private cartoonService: CartoonCharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input()
  character: CartoonCharacter;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cartoonService.getCartoonCharacterById(id)
        .then(result => this.character = result);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.cartoonService.update(this.character)
      .then(() => this.goBack());
  }
  

}
