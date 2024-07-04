import { boolean, number, object, string, array, Output } from 'valibot';

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

export const ProductSchemaZod = object({
    id: number(),
    name: string(),
    price: number(),
    active: boolean()
})

// import { z, ZodSchema } from 'zod';

// export const ProductSchemaZod: ZodSchema<{
//     id?: number;
//     name?: string;
//     price?: number;
//     active?: boolean;
// }> = z.object({
//     id: z.number().optional(),
//     name: z.string().optional(),
//     price: z.number().optional(),
//     active: z.boolean().optional(),
// });


export type Product = Output<typeof ProductSchema>

export const ProductsSchema = array(ProductSchema)


