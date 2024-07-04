import { boolean, number, object, string, array, InferTupleOutput } from 'valibot';

// import { z } from 'zod';

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

// export const ProductSchemaZod = z.object({
//     id: z.number(),
//     name: z.string(),
//     price: z.number(),
//     active: z.boolean()
// })

import { z, ZodSchema } from 'zod';

export const ProductSchemaZod: ZodSchema<{
    id?: number;
    name?: string;
    price?: number;
    active?: boolean;
}> = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    price: z.number().optional(),
    active: z.boolean().optional(),
});


export type Product = InferTupleOutput<typeof ProductSchema>

export const ProductsSchema = array(ProductSchema)


