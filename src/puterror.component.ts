import { Component, Input, Renderer } from '@angular/core';

@Component({
    selector: 'error-message',
    template: `
    <table id='{{id}}' *ngIf = 'control' class='error-tab' cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td>
                <div class='tran' [ngClass]="{'bot-tran': position === 'bottom'}"></div>
            </td>
            <td>
                <div class='td-icon'>
                <div class='error-icon'></div>
                </div>
            </td>
            <td>
                <div class='td-text'>
                    <div *ngIf='text !== null '>{{text}}</div>
                    <div>
                        <ng-content></ng-content>
                    </div>
                </div>
            </td>
        </tr>
    </table>
    `,
    styles: [`
    
    :host {
        width: 100%;
        white-space: nowrap;
        display: inline-block;
        position: absolute;
        padding: 0;
        height:32px; 
        margin-top: 0px;
        margin-left: -15px;
        z-index: 9999;
    }
    @media (max-width: 990px){
        :host{
            display: inline-block;
            white-space: nowrap;
            width: 100%;
            position: absolute;
            padding: 0;
            height: 32px;
            margin-left: -15px;
            margin-top: 8px;
            z-index: 9999;
        }
    }
    :host .error-tab {
        height: 100%;
        width: 100%;
        display: inline-block;
        border-radius: 3px; }
        
        :host .error-tab .tran {
            width: 10px;
            height: 10px;
            background: #feeed4;
            transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            /* IE 9 */
            -moz-transform: rotate(45deg);
            /* Firefox */
            -webkit-transform: rotate(45deg);
            /* Safari 和 Chrome */
            -o-transform: rotate(45deg);
            /* Opera */
            border: 1px solid #d09842;
            border-right: none;
            border-top: none;
            position: relative;
            left: 5px;
            top: 0px;
        }
        
        @media (max-width: 990px){
            :host .error-tab .tran {
                width: 10px;
                height: 10px;
                background: #feeed4;
                left: 25px;
                top: -16px;
                transform: rotate(135deg);
                -ms-transform: rotate(135deg);
                -moz-transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
                -o-transform: rotate(135deg);
                border: 1px solid #d09842;
                border-right: none;
                border-top: none;
                position: relative;
            }
        }

        :host .error-tab tr {
            height:100%;
        }

        :host .error-tab tr td {
            height:100%;
        }

        :host .error-tab .bot-tran {
        left: 25px;
        top: -16px;
        transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        /* IE 9 */
        -moz-transform: rotate(135deg);
        /* Firefox */
        -webkit-transform: rotate(135deg);
        /* Safari 和 Chrome */
        -o-transform: rotate(135deg);
        /* Opera */ }
        :host .error-tab .td-icon, :host .error-tab .td-text {
        height: 100%;
        border: 1px solid #d09842;
        background: #feeed4;
        white-space: nowrap;
        padding: 0 5px; }
        :host .error-tab .td-icon {
        border-right: none;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px; }
        :host .error-tab .td-text {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        white-space: nowrap;
        border-left: none;
        line-height: 32px; }
        :host .error-tab .error-icon {
        width: 24px;
        height: 26px;
        background-image: url(data:image/png;base64,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);
        background-position-x: 70px;
        background-position-y: -5px;
        padding: 0;
        margin-top: 4px; }
    `]
})
export class PutErrorComponent {

    @Input() control: any;
    @Input() text?: string;
    @Input() position?: string;


    constructor(private renderer: Renderer) {
    }
}