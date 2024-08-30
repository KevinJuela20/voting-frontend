import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginDesignComponent } from "./login-design/login-design.component";


@NgModule({
    imports: [
        LoginDesignComponent,

        CommonModule
    ],
    exports: [
        LoginDesignComponent
    ]
})
export class LoginModule { }