import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Language } from 'angular-l10n';
let StartComponent = class StartComponent {
    redirectToDevelopersTutorial() {
        window.open('https://developers.plentymarkets.com/tutorials/angular-plugin', '_blank');
    }
};
tslib_1.__decorate([
    Language()
], StartComponent.prototype, "lang", void 0);
tslib_1.__decorate([
    Input()
], StartComponent.prototype, "myTitle", void 0);
StartComponent = tslib_1.__decorate([
    Component({
        selector: 'ptb-start',
        templateUrl: './start.component.html',
        styleUrls: ['./start.component.scss'],
    })
], StartComponent);
export { StartComponent };
//# sourceMappingURL=start.component.js.map