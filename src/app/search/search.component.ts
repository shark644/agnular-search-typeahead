import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponents } from '../AppComponents.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  @Input() ApiUrl: any;
  @Input() DisplayField: any;
  @Input() SearchField: any;
  @Input() MinimumInputCharacters: any;
  Url: any;
  DataRecard: any = [];
  path: any;

  constructor(private _demoService: AppComponents) {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.subscribe(q => {
      if(q.length >= this.MinimumInputCharacters ){
        this.Url = this.ApiUrl + '?' + this.SearchField + '=' + q;
        this.getData(this.Url);
      }
    })
  }
  public searchValue = '';

  selectedTempStatic(item: any) {
    console.log("item:", item);

    this.searchValue = item[this.DisplayField];
  }

  getData(path: string) {
    console.log("data", path);

    this._demoService.getData(path).subscribe(
      data => { 
        if(data.length > 5){
          data = data.slice(0, 5)
        }

        this.DataRecard = data 
      },
      err => console.error(err),
      () => console.log('done loading ', this.DataRecard)
    );
  }
}
