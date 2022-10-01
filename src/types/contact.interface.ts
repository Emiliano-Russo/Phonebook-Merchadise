export interface Person extends PersonData {
  key: number;
}

export interface PersonData {
  name: string;
  email: string;
  telephone: string;
}
