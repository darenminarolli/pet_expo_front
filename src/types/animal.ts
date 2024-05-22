export interface Pet{
id:number;
name:string;
image:string;
description:string;
}
export interface Bird  extends Pet{
    origin: string;
    species: string;
    family: string;
    habitat: string;
    place_of_found: string;
    diet: string;
    weight_kg: number;
    height_cm: number;
  }
  
  export interface Dog extends Pet {
  
   
    breed_group: string;
    size: string;
    lifespan: string;
    origin: string;
    temperament: string;
    colors: string[];
  }

    export interface Cat extends Pet {
  
    origin: string;
    temperament: string;
    colors: string[];
  }
  
// export type Pet = Dog | Cat | Bird