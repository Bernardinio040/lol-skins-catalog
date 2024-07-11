export interface Answer {
    message: string,
    success: boolean,
    data: SkinList[]
}

export interface Champions {
    type: string,
    format: string,
    version: string,
    data: any[]
}

export interface SkinList {
    name: string,
    skins: any[]
}

export interface SkinTileInterface {
    num: number,
    name: string
}