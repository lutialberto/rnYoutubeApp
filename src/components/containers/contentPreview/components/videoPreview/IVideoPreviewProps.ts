import {IContentPreviewItem} from '~/services/models/ContentPreviewListResponse';

export interface IVideoPreviewProps {
  video: IContentPreviewItem;
  onActionPress: () => void;
  goToAuthorChanel: () => void;
  goToVideo: () => void;
}
