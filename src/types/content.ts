export interface Author {
  name: string;
  avatar: string;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;  // Added video URL field
  createdAt: string;
  views: number;
  author: Author;
  tags: string[];
  duration: string;  // Added duration field
}