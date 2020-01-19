export interface Client {
  id: number;
  title: string;
  turnoverSum: number;
  exportSum: number;

  description: string;

  segment: string;
  industry: string;
  product: string;

  contactPerson: {
    fio: string,
    position: string
  };
}


