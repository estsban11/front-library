// Generated by https://quicktype.io

export interface ListBooksResponse {
  timestamp:  Date;
  message:    null;
  statusCode: number;
  data:       Datum[];
}

export interface Datum {
  id:        number;
  title:     string;
  image:     string;
  author:    Author;
  publisher: Publisher;
}

export interface Author {
  id:       number;
  name:     string;
  lastname: string;
}

export interface Publisher {
  id:      number;
  name:    string;
  address: string;
}



export interface BookRequest {
  id:           number;
  title:        string;
  author_id:    number;
  publisher_id: number;
}

