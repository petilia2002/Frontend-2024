declare const findMaxNegative: (arr: Array<number>) => number;
declare const arr: number[];
declare const maxNegative: number;
declare const createIntegerMatrix: (boolean_matrix: boolean[][]) => number[][];
declare const boolean_maxtrix: boolean[][];
declare const integer_matrix: number[][];
declare const tuple: [number, string, string];
declare const showTuple: (tuple: [number, string, string]) => string;
declare const enum AminoAcid {
    Alanine = "Alanine",
    Arginine = "Arginine",
    Asparagine = "Asparagine",
    AsparticAcid = "Aspartic Acid",
    Cysteine = "Cysteine",
    Glutamine = "Glutamine",
    GlutamicAcid = "Glutamic Acid",
    Glycine = "Glycine",
    Isoleucine = "Isoleucine",
    Leucine = "Leucine",
    Lysine = "Lysine",
    Methionine = "Methionine",
    Phenylalanine = "Phenylalanine",
    Proline = "Proline",
    Serine = "Serine",
    Threonine = "Threonine",
    Tryptophan = "Tryptophan",
    Tyrosine = "Tyrosine",
    Valine = "Valine",
    Histidine = "Histidine"
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
