
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Localizacao} from "../model/localizacao.model";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'fd-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


    @Input()
    dominio: String;
    private subscription : Subscription;
    
    @Output()
    localizacao: EventEmitter<Localizacao> = new EventEmitter<Localizacao>();
    constructor(private _activeRoute: ActivatedRoute, private httpClient: HttpClientService) {
    }

    ngOnInit() {
       this._activeRoute.params.subscribe((params) => {
       let query = params['query'];
       if (query){
         this.dominio = query;
         this.pesquisar();
       }
      console.log(query);
     });
 
    }

    pesquisar(): void {
        this.httpClient
            .get('http://ip-api.com/json/' + this.dominio)
            .subscribe(
                (data) => {
                    data.dominio = this.dominio;

                    this.localizacao.emit(data);
                },
                (error) => console.error(error)
            );
    }

}
