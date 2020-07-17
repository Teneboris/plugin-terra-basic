import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { Language } from 'angular-l10n';
import { ContactsDataSource } from './contacts-data-source';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
let TableComponent = class TableComponent {
    constructor(translation, _contactService) {
        this.translation = translation;
        this._contactService = _contactService;
        this._columnList = ['select',
            'id',
            'name'];
        /**
         * @param _multiple defines if multiple selections are possible or not
         * @param initiallySelectedValues is an array of ContactInterfaces, which are preselected
         */
        this._selection = new SelectionModel(true, []);
        this._dataSource = new ContactsDataSource(this._contactService);
    }
    ngOnInit() {
        this._noResultButtons = [{
                caption: this.translation.translate('search'),
                isHighlighted: true,
                icon: 'icon-search',
                clickFunction: () => this._onSearchBtnClicked()
            }];
        this._dataSource.filter = this.filter;
        this._dataSource.paginator = this.paginator;
        this._dataSource.sort = this.sort;
    }
    _onSearchBtnClicked() {
        this._dataSource.search();
    }
    /** Whether the number of selected elements matches the total number of rows. */
    _isAllSelected() {
        const numSelected = this._selection.selected.length;
        const numRows = this._dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    _masterToggle() {
        this._isAllSelected() ?
            this._selection.clear() :
            this._dataSource.data.forEach((contact) => this._selection.select(contact));
    }
};
tslib_1.__decorate([
    Language()
], TableComponent.prototype, "lang", void 0);
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "filter", void 0);
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true })
], TableComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild(MatSort, { static: true })
], TableComponent.prototype, "sort", void 0);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'ptb-table',
        templateUrl: './table.component.html'
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map