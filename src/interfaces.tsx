export interface Answer {
    message: string,
    success: boolean,
    data: SkinList[]
}

export interface Answer2 {
    message: string,
    success: boolean,
    data: string
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
    skinName: string,
    name: string,
    id: number
}

export interface SurferInterface {
    path: string,
    destiny: string
}