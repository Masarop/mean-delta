import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";
import {forEach} from "@angular/router/src/utils/collection";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'fd-historico-page',
    templateUrl: './historico-page.component.html',
    styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

    historico: Localizacao[];



    constructor(private _router: ActivatedRoute, private httpClient: HttpClientService) {
    }



    consultar(ip):void{



        router.navigateByUrl("map/:"+ip);

    }

    ngOnInit() {

        this._router.params.subscribe((params) => {
            let ip = params['ip'];

            if (ip) {
                this..findById(ip).subscribe(
                    (note) => this.note = note,
                    (err) => this.msgUtil.addAlertError(err.message)
                );
            }
        });

            this.httpClient
            .get('http://localhost:3000/api/localizacao')
            .subscribe((docs) => {
                this.historico = docs
            });
    }
}
