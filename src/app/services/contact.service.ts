import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInterface } from '../interfaces/contact.interface';
import { Observable } from 'rxjs/internal/Observable';
import {
    createHttpParams,
    TerraPagerInterface, TerraPagerParameterInterface
} from '@plentymarkets/terra-components';

@Injectable()
export class ContactService
{
    //private readonly url:string = 'https://d2g.plentymarkets-cloud02.com/rest/accounts/contacts';
    private readonly url:string = 'https://d2g.plentymarkets-cloud02.com/rest/car-parts-finder-plugin/brands?pluginSetPreview=JDJ5JDEwJGNPMUtZMjFDYU91U3kySjZBOTRrc3VaVlV6Zlkwb01jVk03d0xCbEwzRjN4cVpRQmpxdzB5';

    constructor(private http:HttpClient)
    {}

    public getContacts(requestParams?:TerraPagerParameterInterface):Observable<TerraPagerInterface<ContactInterface>>
    {
        return this.http.get<TerraPagerInterface<ContactInterface>>(this.url, {params:  createHttpParams(requestParams)
        });
    }
}
