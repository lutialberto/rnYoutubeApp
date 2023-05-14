import {TagListResponse} from './models/TagListResponse';

export const getTags = async (): Promise<TagListResponse> => {
  return require('~/services/mockResponses/tagListMockResponse.json');
};
