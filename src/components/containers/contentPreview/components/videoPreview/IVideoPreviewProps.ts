import {IContentPreviewVideo} from '~/services/models/ContentPreviewListResponse';

export interface IVideoPreviewProps {
  video: IContentPreviewVideo;
  onActionPress: () => void;
  goToAuthorChanel: () => void;
  goToVideo: () => void;
}
