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
