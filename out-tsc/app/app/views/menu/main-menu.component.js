import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Language } from 'angular-l10n';
let MainMenuComponent = class MainMenuComponent {
    constructor(_treeConfig, router, translation) {
        this._treeConfig = _treeConfig;
        this.router = router;
        this.translation = translation;
    }
    ngOnInit() {
        this._treeConfig.addNode({
            id: 'start',
            name: this.translation.translate('start'),
            isVisible: true,
            isActive: this.router.isActive('plugin/start', true),
            onClick: () => {
                this.router.navigateByUrl('plugin/start');
            }
        });
        this._treeConfig.addNode({
            id: 'example',
            name: this.translation.translate('example'),
            isVisible: true,
            isActive: this.router.isActive('plugin/example', true),
            onClick: () => {
                this.router.navigateByUrl('plugin/example');
            }
        });
    }
};
tslib_1.__decorate([
    Language()
], MainMenuComponent.prototype, "lang", void 0);
MainMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'ptb-main-menu',
        templateUrl: './main-menu.component.html'
    })
], MainMenuComponent);
export { MainMenuComponent };
//# sourceMappingURL=main-menu.component.js.map