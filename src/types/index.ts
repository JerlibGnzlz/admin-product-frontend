import { boolean, number, object, string, array, InferInput } from 'valibot';


import { z } from 'zod';

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    active: boolean(),
})

export const ProductSchemaZod = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    active: z.boolean()
})


export type Product = InferInput<typeof ProductSchema>

export const ProductsSchema = array(ProductSchema)


