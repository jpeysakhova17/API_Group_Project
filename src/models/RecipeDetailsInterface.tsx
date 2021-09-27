export default interface RecipeDetailsInterface {
  recipe: Recipe;
  _links: Links;
}
export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels?: string[] | null;
  healthLabels?: string[] | null;
  cautions?: null[] | null;
  ingredientLines?: string[] | null;
  ingredients?: IngredientsEntity[] | null;
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType?: string[] | null;
  mealType?: string[] | null;
  dishType?: string[] | null;
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  digest?: DigestEntity[] | null;
}
export interface IngredientsEntity {
  text: string;
  quantity: number;
  measure?: string | null;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}
export interface TotalNutrients {
  ENERC_KCAL: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FAT: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FASAT: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FATRN: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FAMS: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FAPU: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  CHOCDF: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FIBTG: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  SUGAR: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  PROCNT: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  CHOLE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  NA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  CA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  MG: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  K: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  ZN: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  P: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITA_RAE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITC: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  THIA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  RIBF: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  NIA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITB6A: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FOLDFE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FOLFD: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FOLAC: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITB12: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITD: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  TOCPHA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITK1: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  WATER: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
}
export interface ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER {
  label: string;
  quantity: number;
  unit: string;
}
export interface TotalDaily {
  ENERC_KCAL: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FAT: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FASAT: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  CHOCDF: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FIBTG: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  PROCNT: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  CHOLE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  NA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  CA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  MG: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  K: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  ZN: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  P: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITA_RAE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITC: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  THIA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  RIBF: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  NIA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITB6A: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  FOLDFE: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITB12: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITD: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  TOCPHA: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
  VITK1: ENERCKCALOrFATOrFASATOrFATRNOrFAMSOrFAPUOrCHOCDFOrFIBTGOrSUGAROrPROCNTOrCHOLEOrNAOrCAOrMGOrKOrFEOrZNOrPOrVITARAEOrVITCOrTHIAOrRIBFOrNIAOrVITB6AOrFOLDFEOrFOLFDOrFOLACOrVITB12OrVITDOrTOCPHAOrVITK1OrWATER;
}
export interface DigestEntity {
  label: string;
  tag: string;
  schemaOrgTag?: string | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: SubEntity[] | null;
}
export interface SubEntity {
  label: string;
  tag: string;
  schemaOrgTag?: string | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}
export interface Links {
  self: Self;
}
export interface Self {
  href: string;
  title: string;
}
