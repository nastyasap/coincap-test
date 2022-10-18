import express from "express";
import * as trpc from '@trpc/server';
import * as trpcExpress from "@trpc/server/adapters/express"
import cors from "cors"
import z from 'zod'
import axios from 'axios';

const CurrencyData = z.object({
    id: z.string(),
    rank: z.string(),
    symbol: z.string(),
    name: z.string(),
    supply: z.string(),
    maxSupply: z.string() || z.null(),
    marketCapUsd: z.string(),
    volumeUsd24Hr: z.string(),
    priceUsd: z.string(),
    changePercent24Hr: z.string(),
    vwap24Hr: z.string(),
    explorer: z.string() || z.null()
})

export type Response<T> = {
    data: T,
    timestamp: number
}

const CurrenciesData = z.array(CurrencyData)

export type CurrencyData = z.infer<typeof CurrencyData>
export type CurrenciesData = z.infer<typeof CurrenciesData>

const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/assets'
})

const appRouter = trpc.router()
    .query('hello', {
        resolve() {
            return ('Hello 77')
        }
    })
    .query('getCurrencyData', {
        input: z.string(),
        output: CurrencyData,
        async resolve({input}) {
            return await instance.get<Response<CurrencyData>>(`/${input}`)
                .then(response => response.data.data)
        }
    })
    .query('getCurrenciesData', {
        // input: z.object({
        //     offset: z.number(),
        //     limit: z.number(),
        //     ids: z.string()
        // }),
        // output: CurrenciesData,
        // async resolve({input: {offset, limit, ids}}) {
        //     return await instance.get<Response<CurrenciesData>>('', {params: {limit, offset, ids}})
        //         .then(response => response.data.data)
        // }
        async resolve() {
                return await instance.get<Response<CurrencyData[]>>('', {params: {offset:0, limit:5}})
                    .then(response => response.data.data)
    }
    })

export type AppRouter = typeof appRouter

const app = express();
app.use(cors())
const port = 8080;

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext: () => null
    })
)

app.get("/", (req, res) => {
    res.send("Hello from api-server");
});

app.listen(port, () => {
    console.log(`api-server listening at http://localhost:${port}`);
});
