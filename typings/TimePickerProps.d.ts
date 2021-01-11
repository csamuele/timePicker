/**
 * This file was generated from TimePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export interface TimePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    dateAttribute: EditableValue<any>;
    requiredMessage?: DynamicValue<string>;
    onChangeAction?: ActionValue;
}

export interface TimePickerPreviewProps {
    class: string;
    style: string;
    dateAttribute: string;
    requiredMessage: string;
    onChangeAction: {} | null;
}