import { Product } from "./models/product";

export const productsKA: Product[] = [
    {
        name: "Pommes",
        options: [
            { name: "", price: 4.5 },
        ]
    },
    {
        name: "Messwurst (Paar)",
        options: [
            { name: "im Bröchten", price: 4.5 },
        ],
    },
    {
        name: "Messwurst (Stück)",
        options: [
            { name: "im Bröchten", price: 2.5 },
        ],
    },
    {
        name: "Brötchen",
        options: [
            { name: "", price: 0.5 },
        ],
    }
];

export const products: Product[] = [
    {
        name: "Messwurst (Paar)",
        flat: true,
        options: [
            { name: "im Papier", price: 4 },
            { name: "im Bröchten", price: 4.5 },
        ]
    },
    {
        name: "Messwurst (Stück)",
        flat: true,
        options: [
            { name: "im Papier", price: 2 },
            { name: "im Bröchten", price: 2.5 },
        ]
    },
    {
        name: "LKW",
        options: [
            { name: "", price: 3.5 },
        ],
    },
    {
        name: "Brötchen",
        options: [
            { name: "", price: 0.5 }
        ]
    },
    {
        name: "Schnitzel",
        options: [
            { name: "", price: 7 },
            { name: "auf Brötchen", price: 7.5 },
            { name: "mit Salat", price: 12.5 },
            { name: "mit Pommes", price: 11.5 },
        ],
    },
    {
        name: "Hähnchenschnitzel",
        options: [
            { name: "", price: 5 },
            { name: "auf Brötchen", price: 5.5 },
            { name: "mit Salat", price: 10.5 },
            { name: "mit Pommes", price: 9.5 },
        ],
    },
    {
        name: "Steak",
        options: [
            { name: "mit Zwiebeln", price: 6.5 },
            { name: "mit Salat", price: 12 },
            { name: "mit Pommes", price: 11 },
        ],
    },
    {
        name: "Fleischkäs",
        options: [
            { name: "", price: 5.5 },
            { name: "mit Salat", price: 11 },
            { name: "mit Pommes", price: 10 },
        ],
    },
    {
        name: "Currywurst",
        options: [
            { name: "", price: 6.5 },
            { name: "mit Pommes", price: 11 },
        ],
    },
    {
        name: "Schaschlikpfanne",
        options: [
            { name: "", price: 8.5 }
        ]
    },
    {
        name: "Pommes",
        options: [
            { name: "", price: 4.5, },
        ],
    },
    {
        name: "Kartoffelsalat",
        options: [
            { name: "", price: 5.5, },
        ],
    },
    {
        name: "Wurstsalat",
        options: [
            { name: "mit Brötchen", price: 9 },
        ],
    },
    {
        name: "Frühstück",
        options: [
            { name: "klein", price: 7 },
            { name: "groß", price: 10 },
        ],
    },
    {
        name: "Weißwurst",
        options: [
            { name: "", price: 6 },
            { name: "mit Brezel", price: 7.5 },
        ],
    },
    {
        name: "Emmentaler Käse",
        options: [
            { name: "100g", price: 3, },
        ],
    },
    {
        name: "Brezel",
        options: [
            { name: "", price: 1.5 },
        ],
    },
    {
        name: "Kuchen",
        options: [
            { name: "", price: 4 },
        ],
    },
    {
        name: "Tasse Kaffe",
        options: [
            { name: "", price: 2.5 },
        ],
    },
    {
        name: "Pfand",
        options: [
            { name: "", price: 1 },
        ],
    },
]
