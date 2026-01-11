export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

import { Models } from "appwrite";

export type User = {
  $id: string;
  name: string;
  username: string;
  imageUrl?: string;
};


export type Post = Models.Document & {
  caption: string;
  location: string;
  tags: string[];
  imageId: string;
  imageUrl: string;
  likes: Models.Document[];
  creator: {
    $id: string;
    name: string;
    imageUrl?: string;
  };
};

export type SavedPost = Models.Document & {
  post: Post;
};
