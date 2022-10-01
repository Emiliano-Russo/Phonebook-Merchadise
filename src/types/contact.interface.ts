export interface Contact extends ContactData {
  key: number;
}

export interface ContactData {
  name: string;
  email: string;
  telephone: string;
}
