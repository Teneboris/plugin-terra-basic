import {
    Component,
    OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
    selector:    'ptb-app',
    templateUrl: './plugin-terra-basic.component.html',
    styleUrls:   ['./plugin-terra-basic.component.scss'],
})
export class PluginTerraBasicComponent implements OnInit
{
    /*tslint:disable-next-line:max-line-length*/
    private readonly accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDMwMDE2ZWM0MDRhZjFmYzdkZWQyNjFlZWY3MzlhNDBhZjY2ODQ2OGQ5MjI4ZmNkZGFlYWQwNTY2YWI4MGVhMDMwZDFhM2FhZTAxN2M2MTEiLCJpYXQiOjE1OTQ5NzU2MzksIm5iZiI6MTU5NDk3NTYzOSwiZXhwIjoxNTk1MDYyMDM5LCJzdWIiOiIxNCIsInNjb3BlcyI6WyIqIl19.CvIUpdAvGiiZZL1_6uI4MGLsKEBnd-97ffNsAMAM4ibg2mnckT5K2pjbz85BQ8_G7TR1v3Qhb1v2CGsJ7OG3qJlF9ScvZF4ec6HAJhqBbzRvrVlvmmzx_Njy1RkplNS_DKBTKzlPF_fAQdHbb6armXPgVkyiWkF72uSzO4cyXt7ZYILkJGPAJBNrQiyzFheCo-oVEEKhS9QI6lxHtnwnzLxN2sttojr8_frhEOkrRYyhJJHI2JIryhJjZWzt01x7FdEavP5GQg9wFZ6plQMjywP0GjWbfthYBVpp-v_pcOeY-5FodW4S76CAVllmkohR3h6rpAdmYI-FIXvpAJdlPG-3VMcvOVYE6EYIGkuVZ6YEZ2RUgUAkYBzlCqQCighbF8ndDTa1GnAniynwumnwb269FrcHcUhjSgprDjH558KkcGPVl1F-fwcIAtr3wKTbMTaQLMqCNflbtUXMiSxGqKO-NwYcBLHCI-dX_36IoGsxemZWqzUPe80yECCVWQ8fFNlJMZoqzYihfK_A23-V1iTn9U66S2iGj3eIE3DeZ4txTcxCaKWV3JfGZSmnp_0Nctkx-Qd47VG8i5Sro4Fx8D3-3RIcZBIwcaqWjGiWc4eI8R_sXg4c7ikzdNvG7BqPCY9k18h6ue5XQRVOR1haDsRYdinM7F4kGdIA05ooz8I';

    public ngOnInit():void
    {
        if(!environment.production)
        {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }
    }
}
