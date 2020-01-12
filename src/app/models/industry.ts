export interface Industry {
  id: number;
  title: string;
  exportSum: number;
  subIndustry: Array<SubIndustry>;
}

export interface SubIndustry {
  title: string;
  exportDataList: Array<{
    date: Date,
    value: number
  }>;
}
