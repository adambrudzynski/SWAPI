import { Person } from "../People/types";

export type ApiNode =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles';


  export interface apiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: [Person];
  }

