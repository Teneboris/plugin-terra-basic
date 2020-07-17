import * as tslib_1 from "tslib";
/*import {
    EventEmitter,
    Injectable,
} from '@angular/core';
import {
    FilterComponent, TerraButtonInterface,
    TerraDataTableBaseService,
    TerraDataTableCellInterface,
    TerraDataTableRowInterface,
    TerraPagerInterface,
    TerraPagerParameterInterface, TerraSimpleTableComponent
} from '@plentymarkets/terra-components';
import { ContactInterface } from '../interfaces/contact.interface';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { constructor } from 'glob';*/
import { Component, ViewChild } from '@angular/core';
let BasicTableService = 
// tslint:disable-next-line:component-class-suffix
class BasicTableService {
    constructor(viewContainerRef, contactService) {
        this.contactService = contactService;
        this._headerList = [];
        this._rowList = [];
        this._viewContainerRef = viewContainerRef;
    }
    get headerList() {
        return this._headerList;
    }
    createHeaders() {
        let idCell = {
            caption: 'ID',
            width: '50',
        };
        let nameCell = {
            caption: 'firsname',
            width: '400',
        };
        let countCell = {
            caption: 'lastname',
            width: '100',
        };
        console.log('Zeile 76');
        this.headerList.push(idCell, nameCell, countCell);
    }
    ngOnInit() {
        console.log('Zeile 82');
        for (let i = 1; i < 5; i++) {
            let cellList = [];
            for (let j = 0; j < 3; j++) {
                let buttonList = [];
                buttonList.push({
                    caption: 'Suchen',
                    clickFunction: () => {
                        console.log('Zeile 95');
                        this.createHeaders();
                        this.requestTableData();
                    }
                });
                let buttonCell = {
                    buttonList: buttonList
                };
                cellList.push(buttonCell);
                let row = {
                    cellList: cellList,
                    disabled: i % 3 === 0
                };
                this.rowList.push(row);
            }
        }
    }
    get rowList() {
        return this._rowList;
    }
    requestTableData(params) {
        return this.contactService.getContacts();
    }
};
tslib_1.__decorate([
    ViewChild('table')
], BasicTableService.prototype, "table", void 0);
BasicTableService = tslib_1.__decorate([
    Component({
        selector: 'ptb-start',
        template: require('./start.component.html'),
        styles: [require('./start.component.scss')],
    })
    // tslint:disable-next-line:component-class-suffix
], BasicTableService);
export { BasicTableService };
//# sourceMappingURL=basic-table.service.js.map