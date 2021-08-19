import React from 'react'
import { buttonSchema, Button } from './button'
import { textSchema, Text } from './text'

export interface Style {
    top: number;
    left: number;
}
export interface MaterialSchema {
    uuid: string;
    material: string;
    value: string;
    style: Style;
    className: Object;
}

export interface Props {
    schema: MaterialSchema
}

export const materialSchemas: MaterialSchema[] = [
    buttonSchema,
    textSchema
]

// type Material = () => JSX.Element


interface Material {
    [key: string] : React.FC<Props>
}
export const materials: Material = {
    Button,
    Text,
}
