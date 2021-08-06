export type Urls = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
};

export type Photo = {
  id: number;
  width: number;
  height: number;
  urls: Urls;
  color: string | null;
  user: User;
  alt_description: string;
  created_at: string;
  likes: number;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  }
};

export type User = {
  id: string;
  username: string;
  name: string;
  bio: string;
  instagram_username: string;
  location: string;
  profile_image: {
    large: string;
    medium: string;
    small: string;
  }
  total_likes: number;
  total_photos: number;
  twitter_username: string;
};



