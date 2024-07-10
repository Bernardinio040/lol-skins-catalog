export interface Answer {
    message: string,
    success: boolean,
    data?: string[]
}

export interface Champions {
    type: string,
    format: string,
    version: string,
    data: any[]
}

export interface ChampionSkinList {
    name: string,
    skins: any[]
}