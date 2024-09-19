declare const findMaxNegative: (arr: Array<number>) => number;
declare const arr: number[];
declare const maxNegative: number;
declare const createIntegerMatrix: (boolean_matrix: boolean[][]) => number[][];
declare const boolean_maxtrix: boolean[][];
declare const integer_matrix: number[][];
declare const tuple: [number, string, string];
declare const showTuple: (tuple: [number, string, string]) => string;
declare const enum AminoAcid {
    Alanine = "\u0410\u043B\u0430\u043D\u0438\u043D",
    Arginine = "\u0410\u0440\u0433\u0438\u043D\u0438\u043D",
    Asparagine = "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0438\u043D",
    AsparticAcid = "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0438\u043D\u043E\u0432\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",
    Cysteine = "\u0426\u0438\u0441\u0442\u0435\u0438\u043D",
    Glutamine = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D",
    GlutamicAcid = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D\u043E\u0432\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",
    Glycine = "\u0413\u043B\u0438\u0446\u0438\u043D",
    Isoleucine = "\u0418\u0437\u043E\u043B\u0435\u0439\u0446\u0438\u043D",
    Leucine = "\u041B\u0435\u0439\u0446\u0438\u043D",
    Lysine = "\u041B\u0438\u0437\u0438\u043D",
    Methionine = "\u041C\u0435\u0442\u0438\u043E\u043D\u0438\u043D",
    Phenylalanine = "\u0424\u0435\u043D\u0438\u043B\u0430\u043B\u0430\u043D\u0438\u043D",
    Proline = "\u041F\u0440\u043E\u043B\u0438\u043D",
    Serine = "\u0421\u0435\u0440\u0438\u043D",
    Threonine = "\u0422\u0440\u0435\u043E\u043D\u0438\u043D",
    Tryptophan = "\u0422\u0440\u0438\u043F\u0442\u043E\u0444\u0430\u043D",
    Tyrosine = "\u0422\u0438\u0440\u043E\u0437\u0438\u043D",
    Valine = "\u0412\u044D\u043B\u0438\u043D",
    Histidine = "\u0413\u0438\u0441\u0442\u0438\u0434\u0438\u043D"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const showPetInfo: <T extends Pet>(pet: T) => void;
declare const pet: Pet;
declare const dog: Dog;
declare const cat: Cat;
type AminoAcidInfo = {
    name: AminoAcid;
    formula: string;
    mass: number;
    source: string;
    role: string;
};
declare const alanine: AminoAcidInfo;
declare const jsonAlanine: string;
