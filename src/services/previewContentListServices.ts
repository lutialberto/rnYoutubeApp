import {IContentPreviewListResponse} from './models/ContentPreviewListResponse';

export const getPreviewContentList = async (
  tagId: string,
): Promise<IContentPreviewListResponse> => {
  return require('~/services/mockResponses/contentPreviewListMockResponse.json');
};
