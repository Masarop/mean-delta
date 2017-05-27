import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";

@Component({
    selector: 'fd-historico-page',
    templateUrl: './historico-page.component.html',
    styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

    historico: Localizacao[];

    constructor(private httpClient: HttpClientService) {
    }

    ngOnInit() {
        this.httpClient
            .get('http://localhost:3000/api/localizacao')
            .subscribe((docs)=>{
            this.historico=docs
            });
        ;
    }
}
