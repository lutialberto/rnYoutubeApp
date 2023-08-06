export interface IContentPreviewListResponse {
  sections: IContentPreviewSection[];
}

export interface IContentPreviewSection {
  type: IContentPreviewSectionType;
  data: sectionData[];
}

export type sectionData = IContentPreviewVideo | IContentPreviewPoll | IContentPreviewShort;

export interface IContentPreviewVideo {
  id: string;
  header: IContentPreviewHeader;
  title: string;
  image: string;
  views: string;
  duration: number;
}

export interface IContentPreviewPoll {
  id: string;
  header: IContentPreviewHeader;
  question: string;
  options: IContentPreviewOption[];
  subscribed: boolean;
  responses: string;
  comments: string;
  likes: string;
}

export interface IContentPreviewOption {
  id: string;
  name: string;
  votes: number;
  image: string;
}

export interface IContentPreviewHeader {
  author: string;
  authorImage: string;
  publicationDate: string;
}

export interface IContentPreviewShort {
  shorts: {
    id: string;
    title: string;
    image: string;
    views: string;
  }[];
}

export type IContentPreviewSectionType = 'shorts' | 'videos' | 'polls' | 'publications';
