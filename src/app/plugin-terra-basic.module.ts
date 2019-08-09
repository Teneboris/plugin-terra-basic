import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';

import { HttpModule } from '@angular/http';
import {
    L10nLoader,
    TranslationModule
} from 'angular-l10n';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { l10nConfig } from './core/localization/l10n.config';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
    appRoutingProviders,
} from './plugin-terra-basic.routing';
import {
    httpInterceptorProviders,
    TerraComponentsModule,
    TerraNodeTreeConfig
} from '@plentymarkets/terra-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslationProvider } from './core/localization/translation-provider';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslationModule.forRoot(l10nConfig, { translationProvider: TranslationProvider }),
        RouterModule.forRoot([]),
        TerraComponentsModule
    ],
    declarations: [
        PluginTerraBasicComponent,
        ReactiveFormComponent
    ],
    providers:    [
        {
            provide:    APP_INITIALIZER,
            useFactory: initL10n,
            deps:       [L10nLoader],
            multi:      true
        },
        httpInterceptorProviders,
        appRoutingProviders,
        TerraNodeTreeConfig,
    ],
    bootstrap:    [
        PluginTerraBasicComponent
    ]
})
export class PluginTerraBasicModule
{
    constructor(public l10nLoader:L10nLoader)
    {
        this.l10nLoader.load();
    }
}

function initL10n(l10nLoader:L10nLoader):Function
{
    return ():Promise<void> => l10nLoader.load();
}
