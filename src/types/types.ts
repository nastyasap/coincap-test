export type Columns<A> = {
    header: string
    accessor: A
}

export type CurrencyData = {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string | null
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string | null
}

export type CurrencyTableData = {
    id: string
    name: string
    price: string
    marketCap: string
    dayChange: string
    dayVolume: string
    add: string
}

export type HistoryData = {
    date: string
    priceUsd: string
    time: number
}