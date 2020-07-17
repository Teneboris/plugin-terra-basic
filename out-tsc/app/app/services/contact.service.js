import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { createHttpParams } from '@plentymarkets/terra-components';
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.url = 'https://d2g.plentymarkets-cloud02.com/rest/accounts/contacts';
    }
    getContacts(requestParams) {
        return this.http.get(this.url, { params: createHttpParams(requestParams)
        });
    }
};
ContactService = tslib_1.__decorate([
    Injectable()
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map