export interface Industry {
  id: number;
  title: string;
  indicator: Indicator;
  subIndustries: Array<SubIndustry>;
}

export interface SubIndustry {
  title: string;
  indicator: Array<Indicator>;
}

export interface Indicator {
  date: Date;
  value: number;
}

export interface RootObject {
  segment: Segment;
  country: Country;
  month: string;
  volume: number;
}

export interface Country {
  name: string;
  alpha2: string;
}

export interface Segment {
  name: string;
  ehd_id: number;
}
export interface AnaliticsByCountry {
  country: Country;
  month: string;
  volume: number;
}


