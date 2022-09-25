import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {
  public myForm: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { 
     this.myForm =  this.formBuilder.group({
       message: ['', Validators.compose(
        [
          Validators.minLength(3), 
          Validators.maxLength(300)
        ]
       )]
     })
  }
 
  ngOnInit(): void {
    
  }

  onSubmit(){
    const msgController = this.myForm.get('message');
    const message: string = msgController?.value;
    console.log(message);
  }

}
