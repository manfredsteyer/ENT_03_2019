import { DashboardTileModule } from './../dashboard-tile/dashboard-tile.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { DashboardPageComponent } from "./dashboard-page.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardPageComponent}
        ])
    ],
    declarations: [DashboardPageComponent],
    providers: [],
    exports: [DashboardPageComponent]
})
export class DashboardModule {}
