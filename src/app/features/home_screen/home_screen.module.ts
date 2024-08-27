import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartModule } from "primeng/chart";


@NgModule({
    imports: [
        ChartModule,

        CommonModule
    ],
    exports: [
        ChartModule,
    ]
})
export class HomeScreenModule { }