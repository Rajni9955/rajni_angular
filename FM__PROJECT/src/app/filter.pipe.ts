import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: any, serachText:any): any {
    console.log('tableData',tableData);
    console.log('serachText',serachText);
    if(!tableData) return null;
     if(!serachText){
      return tableData;
     }
    let serach = serachText?.toLowerCase();
     return  tableData.filter((element:any)=>{
     return  JSON.stringify(element.fullName).toLowerCase().includes(serach)
     })
    
  }

}
