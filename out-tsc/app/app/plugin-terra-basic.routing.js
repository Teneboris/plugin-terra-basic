import { RouterModule } from '@angular/router';
import { StartViewComponent } from './views/start-view.component';
import { RouterViewComponent } from './views/router/router-view.component';
import { ExampleViewComponent } from './views/example/example-view.component';
const appRoutes = [
    {
        path: '',
        redirectTo: 'plugin',
        pathMatch: 'full',
    },
    {
        path: 'plugin',
        component: RouterViewComponent,
        children: [
            {
                path: '',
                data: {
                    label: 'menu'
                },
                redirectTo: 'start',
                pathMatch: 'full'
            },
            {
                path: 'start',
                component: StartViewComponent,
                data: {
                    label: 'start'
                }
            },
            {
                path: 'example',
                component: ExampleViewComponent,
                data: {
                    label: 'example'
                }
            }
        ]
    },
];
export const appRoutingProviders = [];
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=plugin-terra-basic.routing.js.map