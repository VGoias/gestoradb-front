import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  player: Player = {
    id: '',
    nick: '',
    birth: ''
  }

  nick = new FormControl('', Validators.minLength(2))
  id_unity: String = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private service: PlayerService
  ) { }

  ngOnInit(): void {
    this.id_unity = this.route.snapshot.paramMap.get("id_unity")!;
  }

  getMessage(){
    if(this.nick.invalid){
      return 'O campo [ nick ] deve conter entre 2 e 15 caracteres';
    }
    return false;
  }

  create(): void{
    this.service.create(this.player, this.id_unity).subscribe((resposta) => {
      this.list()
      this.service.mensagem('Jogador(a) criado(a)');
    }, err => {
      for (let index = 0; index < err.error.errors.length; index++) {
        this.service.mensagem(err.error.errors[index].message);        
      }
    })
  }

  list(){
    this.router.navigate([`unities/${this.id_unity}/players`])
  }

}
