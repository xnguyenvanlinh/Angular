export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: string;
  desc: string;
  categoryId: string;
  images: string[];
}
export interface Profile {
  name: string;
  major: string;
  about: string;
  cv: string;
}
export interface Post {
  id: string;
  image: string;
  createAt: string;
  categoryPostId: string;
  short_desc: string;
  desc: string;
}
export interface Project {
  id: string;
  image: string;
  createAt: string;
  categoryPostId: string;
  short_desc: string;
  desc: string;
}
