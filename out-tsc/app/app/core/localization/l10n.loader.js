import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { L10N_CONFIG } from 'angular-l10n';
/**
 * @description This might be used to dynamically load the configuration data. The configuration must be completed before invoking the load method
 * of L10nLoader.
 * @link https://robisim74.github.io/angular-l10n/spec/configuration/#dynamic-settings)
 */
let LocalizationLoader = class LocalizationLoader {
    constructor(l10nLoader, config) {
        this.l10nLoader = l10nLoader;
        this.config = config;
    }
    load() {
        this.config.locale.language = this.getLanguage();
        return this.l10nLoader.load();
    }
    getLanguage() {
        let langInLocalStorage = localStorage.getItem('plentymarkets_lang_');
        let lang = null;
        if (langInLocalStorage !== null) {
            lang = langInLocalStorage;
        }
        else {
            lang = navigator.language.slice(0, 2).toLocaleLowerCase();
            if (lang !== 'de' && lang !== 'en') {
                lang = 'en';
            }
            localStorage.setItem('plentymarkets_lang_', lang);
        }
        return lang;
    }
};
LocalizationLoader = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(1, Inject(L10N_CONFIG))
], LocalizationLoader);
export { LocalizationLoader };
//# sourceMappingURL=l10n.loader.js.map