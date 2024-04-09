
    export interface Movies {
      page: number;
      results: any[];
      total_pages: number;
      total_results: number;
      }
      
      export interface Dates {
        maximum: Date;
        minimum: Date;
      }
      export interface MovieResult {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection?: any;
        budget: number;
  
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
     
        release_date: string;
        revenue: number;
        runtime: number;
       
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }
      
      export interface Movie {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: OriginalLanguage;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: Date;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }
      
      export enum OriginalLanguage {
        En = "en",
        Es = "es",
      }

