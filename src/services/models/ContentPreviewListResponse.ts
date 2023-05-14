export interface IContentPreviewListResponse {
  sections: IContentPreviewSection[];
}

export interface IContentPreviewSection {
  type: IContentPreviewSectionType;
  data: IContentPreviewItem[];
}

export interface IContentPreviewItem {
  id: string;
  header: IContentPreviewHeader;
  title: string;
  image: string;
  views: string;
  duration: number;
}

export interface IContentPreviewHeader {
  author: string;
  authorImage: string;
  publicationDate: string;
}

export type IContentPreviewSectionType = 'shorts' | 'videos' | 'poll' | 'publication';
