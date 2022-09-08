import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA, MatSnackBarRef  } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data,
    private _snackRef: MatSnackBarRef<CustomSnackbarComponent>,
    private ren: Renderer2
  ) {
    setTimeout(()=>{
      let snackEl = document.getElementsByClassName('mat-snack-bar-container').item(0);
      ren.listen(snackEl, 'click', ()=>this.dismiss())
    })
   }

  ngOnInit(): void {
  }

  dismiss(){
    this._snackRef.dismiss();
  }

}
