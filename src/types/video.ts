export interface Video {
  id: number;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

export interface VideoCardProps extends Video {}