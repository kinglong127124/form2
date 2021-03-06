import { EventEmitter } from '@angular/core';
export declare class SelectComponent {
    isTranslate: boolean;
    private _model;
    model: any[];
    curOption: any;
    curOptionChange: EventEmitter<any>;
    ngOnInit(): void;
    private options;
    private selected;
    init(): void;
    changeCurOption(option: any): void;
    private __curOption;
    _curOption: any;
    cHeight: number;
    valueField: any;
    displayField: any;
    titleField: string;
    field: any;
    isDisabled?: Boolean;
    haveAll: Boolean;
    singleArray: any[];
    noTranslate: any;
    change: any;
    onChange: Function;
    compare: any;
    readonly?: Boolean;
    private processData;
    private optionsShow;
    constructor();
    processTitle(item: any, isItem: Boolean): any;
    hidePanel: () => void;
    toggleOptionsPanel(): void;
    processDisplay(item: any, isItem: Boolean): any;
    manualChange(option: any): void;
    translate(data: any): {
        __select_item: boolean;
        value: any;
        title: any;
        name: any;
    }[];
    getVal(item: any, filed: string, isItem: Boolean, translate?: any): any;
    company(a: any, b: any): any;
}
