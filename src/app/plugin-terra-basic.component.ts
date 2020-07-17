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
    private readonly accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzIyYmUwNmY4NTI1MGFhYzY4MjFiOGM1N2VhYWMzMTA4ZGU3NjFhYjc5OTQ1NmYyNTE3NjhhYmIzMzEzYjQ4Mjc5MTRmNzQzZTEzODBkNmMiLCJpYXQiOjE1OTQ5NzM4MzQsIm5iZiI6MTU5NDk3MzgzNCwiZXhwIjoxNTk1MDYwMjM0LCJzdWIiOiIxNCIsInNjb3BlcyI6WyIqIl19.q3Ub6Rg9WiIZxIIdBWflEJsUzfBomaeeCmH70h_9wRtjWt-rBPvMl6XDYvU0Aw_OqQ5WAzu6eHN_wCCO5n1z2jJskTmMPeg4J1jAqcF4HzoUaiNPtfl94bd3Oqj8E6ThG2tgD1vsGdcSl36Lu-I7jszf5ernTwKcdeczglO8ODwUsoYo_vUd9d6Me3oWJxFNrET2dhwxtaqEhMkqUVqy2KYLXH9r4n8nwuz4JrWUyMccEAne1Mmk1WPFpC0_M5D4BXaJO34EMvtgZ9g4AlsiKWkKuSRiqA2Yh0gYnMgASvVoKoTpFLDbAn4YwxlECpOjBIZcLMh-KIi60kaa-uhCoW06o_EWQYf96f_t8VfXCE46s3vh-wpUHreK2eAThv2XEqwjklEpPQNE3rOxroK-bgFUOBCmwA2q6p8_R346NhDGK7IxgN1WRC4gzC193FCUJhsiyhgptUiKCzBA4vFLQSj0lB_GI5V62H3o6ODeHiITQkS9yt9DSGgyquq6pLdYJUGo81qxt8plH4NG7y8YIBb2sanZwiYqTSDKCddfwUyne85C7RFRNLKknwhBjnOuTPFiqVyIzNvM3O4NpVgSOKUihfyL71KiqdXLzD4niZz9G86M4A2CrGNCKlLfg7D5pXFzDLrUS3qqx72iV9Aa-XOXI2jqPjSj26i3SR0rwFs';

    public ngOnInit():void
    {
        if(!environment.production)
        {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }
    }
}
