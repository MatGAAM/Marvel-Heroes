export interface Hero {
    id: number,
    name: string,
    description?: string,
    favorite?:boolean,
    series?: {
        avaliable: number,
        colletionURI: string,
        item: [
            {
                name: string,
                resourceURI: string
            }
        ]
    },
    stories?: {
        avaliable: number,
        colletionURI: string,
        item: [
            {
                name: string,
                resourceURI: string,
                type: string
            }
        ]
    },
    thumbnail: {
        extension: string,
        path: string
    },
    comics?: {
        available: number,
        colletionURI: string,
        items: [
            {
                name: string,
                resourceURI: string,
                type: string
            }
        ]
    },
    events: {
        available: number,
        collectionURI: '',
        items: [],
        returned: number
    }
}

export interface ComicBookCover {
    id: number
    path: string
    extension: string
}

export interface FavoriteComic {
    id: number
    name: string
    resourceURI: string
}