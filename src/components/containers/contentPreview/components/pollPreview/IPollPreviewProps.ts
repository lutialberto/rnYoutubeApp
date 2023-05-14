import {IContentPreviewPoll} from '~/services/models/ContentPreviewListResponse';

export interface IPollPreviewProps {
  poll: IContentPreviewPoll;
  onLikePress: () => void;
  onDislikePress: () => void;
  onCommentPress: () => void;
}
