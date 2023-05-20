import {LikeStatus} from '~/models/LikeStatus';

export interface IPollPreviewInfoProps {
  responses: string;
  likes: string;
  comments: string;
  likeStatus: LikeStatus;
  onLikePress: () => void;
  onDislikePress: () => void;
  onCommentPress: () => void;
}
