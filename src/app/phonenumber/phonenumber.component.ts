import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  SearchCountryField,
  CountryISO
} from "ngx-intl-tel-input";

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrl: './phonenumber.component.scss'
})
export class PhonenumberComponent {
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Tunisia];
  phoneForm = new FormGroup({
    phone: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
    this.phoneForm.patchValue({
      phone: "+21655555555",
    });
  }
}
