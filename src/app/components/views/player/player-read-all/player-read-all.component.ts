import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-read-all',
  templateUrl: './player-read-all.component.html',
  styleUrls: ['./player-read-all.component.css']
})
export class PlayerReadAllComponent implements OnInit {

  players: Player[] = []
  id_unity: String = ""
  displayedColumns: string[] = ['id', 'nick', 'birth', 'bio', 'actions'];

  constructor(
      private service: PlayerService,
      private route: ActivatedRoute, 
      private router: Router
  ) { }

  ngOnInit(): void {
    this.id_unity = this.route.snapshot.paramMap.get("id_unity")!;
    this.findAll();
  }

  findAll(){
      this.service.findAllByUnity(this.id_unity).subscribe(resposta => {
      console.log(resposta);
      this.players = resposta;
    })
  }

  newPlayer(){
    this.router.navigate([`unities/${this.id_unity}/players/create`])
  }

}
