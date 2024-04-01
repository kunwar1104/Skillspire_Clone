export const TYPE_TEXT = 'text';
export const TYPE_NUMBER = 'number';
export const TYPE_HTML = 'html';
export const TYPE_RADIO = 'radio'
export const TYPE_LINK = 'link';
export const TYPE_STATUS = 'status';
export const TYPE_STATUS_BG = 'status_bg';
export const TYPE_DATE = 'date';
export const TYPE_DATETIME = 'dateTime';
export const TYPE_ACTION = 'action';
export const TYPE_BUTTON = 'button'

export type GRID_COLUMN_TYPE = typeof TYPE_TEXT | typeof TYPE_NUMBER | typeof TYPE_HTML | typeof TYPE_RADIO| typeof TYPE_LINK | typeof TYPE_STATUS | typeof TYPE_STATUS_BG | typeof TYPE_DATE | typeof TYPE_DATETIME | typeof TYPE_ACTION | typeof TYPE_BUTTON;

export interface GRID_COLUMN {
    label: string;
    key: string;
    type: GRID_COLUMN_TYPE;
    actions?:string[];
    redirectLink?:string;
    isShowEye?:string;

}