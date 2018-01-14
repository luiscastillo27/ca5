import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
})
export class FormDataComponent implements OnInit {

  public forma:FormGroup;

  public usuario:any = {
    nombre: "",
    apellido: "",
    correo: "",
    // pasatiempo: ["Programar", "Trabajar", "Estudiar"]
  }

  constructor() {
      this.forma = new FormGroup({
        'nombre': new FormControl('', [
                                        Validators.required,
                                        this.noJim,
                                        Validators.minLength(3)
                                      ]),
        'apellido': new FormControl('', [Validators.required] ),
        'correo': new FormControl('', [
                                        Validators.required,
                                        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                      ]),
        'pasatiempo': new FormArray([
            new FormControl('', [Validators.required])
        ]),
        'username': new FormControl('', [Validators.required], this.existeUsuario ),
        'password1': new FormControl('', [Validators.required]),
        'password2': new FormControl()

      });

      this.forma.controls['password2'].setValidators([
        Validators.required,
        this.noIgual.bind( this.forma ),
        Validators.minLength(8)
      ]);
      //this.forma.setValue( this.usuario );
  }


  ngOnInit() {

  }

  public guardarCambios(){
    console.log(this.forma);
    console.log(this.forma.value);
    this.forma.reset({
      nombre: "",
      apellido: "",
      correo: ""
    });
  }

  public nuevoPasatiempo(){
    (<FormArray>this.forma.controls["pasatiempo"]).push(
      new FormControl('', [Validators.required])
    );
  }

  public noJim( control: FormControl): {[s:string]:boolean} {

      if(control.value === "Jim"){
        return {
          nojim:true
        }
      }
      return null;

  }

  public existeUsuario( control:FormControl):Promise<any> | Observable<any>{

    let promesa = new Promise(
        (resolve, reject) => {

          setTimeout(() =>{

            if( control.value === "Jim&Luis"){
              resolve({
                existe: true
              })
            } else {
              resolve( null )
            }
          }, 3000);
          
        }
    )

    return promesa;

  }

  public noIgual( control: FormControl): {[s:string]:boolean} {

    //console.log(this);
    let forma:any = this;
    if( control.value !== forma.controls['password1'].value ){
      return {
        noiguales: true
      }
    }
    return null;

  }

}
