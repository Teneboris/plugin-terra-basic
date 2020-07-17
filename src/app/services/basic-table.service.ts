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
import {
    Component, EventEmitter,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {
    TerraSimpleTableCellInterface,
    TerraSimpleTableHeaderCellInterface,
    TerraSimpleTableRowInterface,
    TerraPagerInterface,
    TerraSimpleTableComponent,
    TerraPagerParameterInterface, TerraButtonInterface, TerraDataTableBaseService
} from '@plentymarkets/terra-components';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs';
import { ContactInterface } from '../interfaces/contact.interface';

@Component({
    selector: 'ptb-start',
    template: require('./start.component.html'),
    styles:   [require('./start.component.scss')],
})
// tslint:disable-next-line:component-class-suffix
export class BasicTableService implements OnInit
{
    // @ts-ignore
    @ViewChild('table')
    public table:TerraSimpleTableComponent<any>;
    private _headerList:Array<TerraSimpleTableHeaderCellInterface> = [];
    private _viewContainerRef:ViewContainerRef;
    private _rowList:Array<TerraSimpleTableRowInterface<any>> = [];

    public constructor(viewContainerRef:ViewContainerRef, private contactService:ContactService)
    {
        this._viewContainerRef = viewContainerRef;
    }

    public get headerList():Array<TerraSimpleTableHeaderCellInterface>
    {
        return this._headerList;
    }
    public createHeaders():void
    {
        let idCell:TerraSimpleTableHeaderCellInterface = {
            caption: 'ID',
            width:   '50',
        };
        let nameCell:TerraSimpleTableHeaderCellInterface = {
            caption: 'firsname',
            width:   '400',
        };
        let countCell:TerraSimpleTableHeaderCellInterface = {
            caption: 'lastname',
            width:   '100',
        };
        console.log('Zeile 76');
        this.headerList.push(idCell, nameCell, countCell);
    }

    public ngOnInit():void
    {
        console.log('Zeile 82');
        for(let i:number = 1; i < 5; i++)
        {
            let cellList:Array<TerraSimpleTableCellInterface> = [];
            for(let j:number = 0; j < 3; j++)
            {
                let buttonList:Array<TerraButtonInterface> = [];

                buttonList.push({
                    caption:       'Suchen',
                    clickFunction: ():void =>
                    {
                        console.log('Zeile 95');
                        this.createHeaders();
                        this.requestTableData();
                    }
                });

                let buttonCell:TerraSimpleTableCellInterface = {
                    buttonList: buttonList
                };

                cellList.push(buttonCell);
                let row:TerraSimpleTableRowInterface<any> = {
                    cellList: cellList,
                    disabled: i % 3 === 0
                };
                this.rowList.push(row);
            }
        }
    }
    public get rowList():Array<TerraSimpleTableRowInterface<any>>
    {
        return this._rowList;
    }
    public requestTableData(params?:TerraPagerParameterInterface):Observable<TerraPagerInterface<ContactInterface>>
    {
        return this.contactService.getContacts();
    }

}
