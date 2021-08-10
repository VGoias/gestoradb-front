import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.css']
})
export class PlayerUpdateComponent implements OnInit {

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
    this.player.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  getMessage(){
    if(this.nick.invalid){
      return 'O campo [ nick ] deve conter entre 2 e 15 caracteres';
    }
    return false;
  }

  findById(): void {
      this.service.findById(this.player.id!).subscribe((resposta) => {
      this.player = resposta
      this.service.mensagem('Os dados do(a) Jogador(a) foram carregados');
    })
  }

  update(): void{
      console.log(this.player);
      this.service.update(this.player).subscribe((resposta) => {
      this.list()
      this.service.mensagem('Os dados do(a) Jogador(a) foram atualizados com sucesso!');
    }, err => {
      this.list()
      this.service.mensagem('Não foi possível atualizar os dados nesse momento, tente novamente mais tarde!')
    })
  }

  list(){
    this.router.navigate([`unities/${this.id_unity}/players`])
  }

}
