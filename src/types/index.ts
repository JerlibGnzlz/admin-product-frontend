// import { boolean, number, object, string, array, InferTupleOutput } from 'valibot';
import { v } from 'valibot';

import { z } from 'zod';

export const DraftProductSchema = v.object({
    name: v.string(),
    price: v.number()
})

export const ProductSchema = v.pipe({
    id: v.number(),
    name: v.string(),
    price: v.number(),
    active: v.boolean(),
})

export const ProductSchemaZod = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    active: z.boolean()
})


export type Product = v.InferTupleOutput<typeof ProductSchema>

export const ProductsSchema = v.array(ProductSchema)


