export interface ComingSoonShow {
  id?: string;
  title: string;
  releaseState: string;
  year: string;
  directors: string;
  image: string;
}
export interface searchShow {
  id?: string;
  title: string;
  image: string;
  description: string;
}
export interface Show {
  id: string;
  title: string;
  year: string;
  type: string;
  runtimeStr: string;
  directors: string;
  image: string;
  plot: string;
  awards: string;
  stars: string;
  actorList: [
    {
      image: string;
      name: string;
    }
  ];
}
