export {};

export type TChartData = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }
  ];
};

// COMPONENTS
export type TButtonCustom1 = {
  title: string;
  path: string;
};

export type TTextHeader = {
  titleText: string;
  titleButton?: string;
  path: string;
};
