import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {

  player: Player = {
    id: '',
    nick: '',
    birth: ''
  }

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

  findById(): void {
      this.service.findById(this.player.id!).subscribe((resposta) => {
      this.player = resposta
      this.service.mensagem('Os dados do(a) Jogador(a) foram carregados');
    })
  }

  delete(): void{
      this.service.delete(this.player.id!).subscribe(() => {
      this.list()
      this.service.mensagem('Os dados do(a) Jogador(a) foram deletados com sucesso!');
    }, err => {
      this.list()
      this.service.mensagem('Não foi possível deletar os dados nesse momento, tente novamente mais tarde!')
    })
  }

  list(){
    this.router.navigate([`unities/${this.id_unity}/players`])
  }

}
