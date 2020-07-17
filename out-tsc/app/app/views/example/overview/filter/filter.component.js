import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TerraFilter } from '@plentymarkets/terra-components';
let FilterComponent = class FilterComponent {
    constructor() {
        this.filter = new TerraFilter();
    }
};
FilterComponent = tslib_1.__decorate([
    Component({
        selector: 'ptb-filter',
        templateUrl: './filter.component.html'
    })
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=filter.component.js.map