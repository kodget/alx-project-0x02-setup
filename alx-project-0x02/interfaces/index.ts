export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number | string;
  website: string;
  company: Company;
}
export interface UserCardProps {
  posts: UserProps[];
}

export interface PostCardProps {
  posts: PostProps[];
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
  id: number;
}

export interface ButtonProps {
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  title: "small" | "medium" | "large";
  size: string;
}

export interface Person {
  id: string; // unique identifier
  name: string;
  description: string;
  initColor: string; // Tailwind bg class
  hoverColor: string; // Tailwind hover:bg class
}

export interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  addPerson: (person: Person) => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface GlobalProps {
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  content: string;
  initColor: string;
  hoverColor: string;
}
