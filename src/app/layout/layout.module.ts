import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    imports: [
        HeaderComponent,
        FooterComponent,
      CommonModule
    ],
    exports: [
      HeaderComponent,
      FooterComponent
    ]
  })
  export class LayoutModule { }