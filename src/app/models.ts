export interface Profile {
  name: string;
  position: string;
  about: string;
  cv: string;
}
export interface Project {
  id: string;
  name: string;
  categoryProjectId: string;
  images: string[];
  createdAt: number;
  updatedAt: number;
  desc: string;
}
export interface Category {
  posts: any;
  projects: any;
  id: string;
  name: string;
}
export interface Post {
  id: string;
  title: string;
  images: string[];
  createdAt: number;
  updatedAt: number;
  categoryPostId: string;
  desc: string;
}
