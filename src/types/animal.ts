export interface Pet{
type_of_pet: 'dogs' | 'cats' | 'birds';
_id?:string;
name:string;
image:string | null;
description:string;
}
export interface Bird  extends Pet{
    origin?: string;
    species?: string;
    family?: string;
    habitat?: string;
    place_of_found?: string;
    diet?: string;
    weight_kg?: string;
    wingspan_cm?: string;
  }
  
  export interface Dog extends Pet {
    breed_group?: string;
    size?: string;
    lifespan?: string;
    origin?: string;
    temperament?: string;
    colors?: string[];
  }

    export interface Cat extends Pet {
    origin?: string;
    temperament?: string;
    colors?: string[];
  }
  
