import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";

@Component({
    selector: 'fd-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

    localizacao: any = new Localizacao();

    constructor(private httpClient: HttpClientService) {
    }

    exibirLocalizacao(localizacao): void {
        this.localizacao = localizacao;

        this.httpClient
            .post('http://localhost:3000/api/localizacao', this.localizacao)
            .subscribe((localizacao) => {
                console.log(localizacao);
            });
    }

}
