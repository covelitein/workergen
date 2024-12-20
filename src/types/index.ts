export interface Lead {
  name: string;
  topic: string;
  statusReason: string;
  createdOn: string;
}

export interface LinearData {
  won: number;
  committed: number;
  bestCase: number;
  qualified: number;
  leads: number;
  wonPercentage: number;
  committedPercentage: number;
  bestCasePercentage: number;
  qualifiedPercentage: number;
  leadsPercentage: number,
};