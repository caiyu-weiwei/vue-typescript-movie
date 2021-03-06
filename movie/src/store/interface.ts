export interface movie {
  name: string;
  rating: rating;
  genres: any[];
  title: string;
  casts: start[];
  collect_count: number;
  original_title: string;
  subtype: string;
  directors: any[];
  year: string;
  images: any[];
  alt: string;
  id: string;
};

export interface rating {
  max: number;
  average: string;
  stars: number;
  min: number;
}

export interface start {
  alt: string;
  avatars: any[];
  name: string;
  id: string;
}

export interface State {
  movieList?: movie[];
}
