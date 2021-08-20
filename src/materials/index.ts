import React from 'react'
import { buttonSchema, Button } from './button'
import { textSchema, Text } from './text'

export interface MaterialSchema {
    uuid: string;
    material: string;
    value: string;
    style: {
        top: number;
        left: number;
    };
    className: Object;
}

export interface Props {
    schema: MaterialSchema;
}

export const materialSchemas: MaterialSchema[] = [
    buttonSchema,
    textSchema
]

// type Material = () => JSX.Element


interface Material {
    [key: string] : React.FC<any>
}
export const materials: Material = {
    Button,
    Text,
}
