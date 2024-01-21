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
}