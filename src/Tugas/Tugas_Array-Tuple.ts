/*
## Tugas 2A -- Array

    Soal 1.
    Buat array bernama hobbies yang hanya menerima string.
    Isinya: Coding
            Gaming
            Reading.

    Soal 2.
    Buat array bernama scores yang hanya menerima number.

    Isinya: 90
            85
            95
            88

    Soal 3.
    Buat array students yang berisi object.
    Setiap student wajib memiliki: name → string
                                age → number
    Masukkan minimal 3 student.
*/

const hobbies: string[] = ['Coding','Gaming','Reading'];
let scores : number[] = [90,85,95,88]

const Murid: {
    name: string;
    age: number;
}[] = [
    {
        name:'MonyeD',
        age: 15,
    },
    {
        name:'Gibran Tetanus',
        age: 22,
    },
    {
        name:'Kucay',
        age: 15,
    },    
]

/* ## Tugas 2B -- Tuple
    Buat tuple: product

    dengan format:
    [nama produk, harga]

    Contohnya:

    ["Keyboard", 500000]
    Atur TypeScript supaya: nama produk → string
                            harga       → number
*/

const product: [string, number] = ['Keayboard', 500000];