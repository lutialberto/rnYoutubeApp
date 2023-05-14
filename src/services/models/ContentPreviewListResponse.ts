export interface IContentPreviewListResponse {
  sections: IContentPreviewSection[];
}

export interface IContentPreviewSection {
  type: IContentPreviewSectionType;
  data: IContentPreviewItem[];
}

export interface IContentPreviewItem {
  id: string;
  title: string;
  image: string;
  author: string;
  authorImage: string;
  views: string;
  duration: number;
  publicationDate: string;
}

export type IContentPreviewSectionType = 'shorts' | 'videos' | 'poll' | 'publication';
