import { TablePagingSortingDataSource } from '@plentymarkets/terra-components';
export class ContactsDataSource extends TablePagingSortingDataSource {
    constructor(contactService) {
        super();
        this.contactService = contactService;
    }
    request(requestParams) {
        return this.contactService.getContacts(requestParams);
    }
}
//# sourceMappingURL=contacts-data-source.js.map