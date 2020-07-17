import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { L10N_CONFIG, L10nTranslationProvider } from 'angular-l10n';
import { HttpClient } from '@angular/common/http';
/**
 * @description A custom TranslationProvider alà angular-l10n which uses a clean instance of the HttpClient.
 * The HttpClient instance then "dispatches the requests directly to the backend without going through the interceptor chain" that is attached to the
 * root injector. See https://angular.io/api/common/http/HttpBackend#description for details.
 *
 * NOTE: This is only a workaround since angular-l10n's TranslationService uses the instance of the HttpClient from the root injector. Apparently,
 * this is the app's injector wherefore the app and the TranslationService share the same instance of the HttpClient and all registered interceptors
 * apply to the requests of the translation files. Those will eventually fail in production.
 */
let TranslationProvider = class TranslationProvider extends L10nTranslationProvider {
    constructor(httpBackend, config, caching) {
        super(new HttpClient(httpBackend), config, caching);
        this.httpBackend = httpBackend;
    }
};
TranslationProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(1, Inject(L10N_CONFIG))
], TranslationProvider);
export { TranslationProvider };
//# sourceMappingURL=translation-provider.js.map