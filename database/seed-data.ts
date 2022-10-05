interface SeedData {
    entries: SeedEntry[];
}


interface SeedEntry {
    description: string;
    status: string;
    createAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pennnding: Esta es la description de la primera entrada',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            description: 'InProgress: Esta es la description de la segunda entrada',
            status: 'in-progress',
            createAt: Date.now() - 223634,
        },
        {
            description: 'Finished: Esta es la description de la tercera entrada',
            status: 'finished',
            createAt: Date.now() - 2025246,
        },
    ],
}