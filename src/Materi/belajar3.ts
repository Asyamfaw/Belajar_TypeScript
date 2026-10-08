// Object type
// contoh Memberikan Type secara eksplisit :

const murid: {
    name: string;
    age: number;
    major: string;
} = {
    name: 'Monyed',
    age: 16,
    major: 'Software Developer'
};

/*  Masalahnya: Object Type bisa panjang 😵
    Bayangkan object kita punya 10 property: 
    const murid: {
        name: string;
        age: number;
        major: string;
        school: string;
        city: string;
        email: string;
        phone: string;
        isActive: boolean;
        ...
    } = {
        ...
    };
*/ 

// Contoh penggunaan type
// Type Alias + Array

type Murid = {
    name: string;
    age: number;
    major: string;
};

const banyakMurid: Murid[] = [
    {
        name: 'Monyed',
        age: 15,
        major: 'DKV'
    },
    {
        name: 'Kucay',
        age: 15,
        major: 'TKJ'
    }
];

const murid1: Murid = {
    name: 'Monyed',
    age: 16,
    major: 'Software Developer'
};

const murid2: Murid = {
    name: 'Kucay',
    age: 15,
    major: 'Software Developer'
};



/*  
    Property tambahan akan ditolak
    Property yang berbeda type
*/

type Pelanggan = {
    name: string;
    age: number;
};

const pelanggan: Pelanggan = {
    name: 'Monyed',
    age: 16,
    // school: 'IDN' ==> ini akan ditolak
};