import { Component, OnInit } from '@angular/core';

var map: Map<string, any> = new Map<string, any>();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private ff = 'asd';

  constructor() { }

  private do() { }

  private do2(): string {
    return '';
  }

  @Inject2('mapKey1')
  private mapKey1?: IMyClass;

  @Inject2('mapKey2')
  private mapKey2?: IMyClass;

  @Inject2('mapKey3')
  private mapKey3?: IMyClass;

  @Inject2('mapKey4')
  private mapKey4?: IMyClass;

  ngOnInit() {

    new MyClass1();
    new MyClass2();
    new MyClass3();

    console.log('map', map);

    const searchKey = 'mapKey2';

    const mcT = map.get(searchKey)
    console.log(searchKey, mcT);

    (new mcT() as IMyClass).say();

    this.mapKey1?.say();
    this.mapKey2?.say();
    this.mapKey3?.say();
    this.mapKey4?.say();
  }

}



function Injectable2(args: any) {
  return function (target: any) {
    map.set(args.key, target)
  };
}
export interface IMyClass {
  say(): void;
}
@Injectable2({ key: 'mapKey1' })
export class MyClass1 implements IMyClass {
  say(): void {
    console.log('it is MyClass1');
  }
}
@Injectable2({ key: 'mapKey2' })
export class MyClass2 implements IMyClass {
  say(): void {
    console.log('it is MyClass2');
  }
}
@Injectable2({ key: 'mapKey3' })
export class MyClass3 implements IMyClass {
  say(): void {
    console.log('it is MyClass3');
  }
}



function Inject2(key: string) {
  return function (target: any, propertyKey: string) {

    let saved: IMyClass | null = null;

    const getter = () => {
      if (saved) return saved;
      const mcT: any = map.get(key);
      saved = typeof mcT == 'function' ? (new mcT() as IMyClass) : null;
      return saved;
    };
    const setter = (newValue: any) => {
      saved = newValue
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  };
} 