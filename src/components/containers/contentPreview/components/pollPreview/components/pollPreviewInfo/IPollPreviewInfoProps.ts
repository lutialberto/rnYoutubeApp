export interface IPollPreviewInfoProps {
  responses: string;
  likes: string;
  comments: string;
  likeStatus: 'liked' | 'notLiked' | 'disliked';
  onLikePress: () => void;
  onDislikePress: () => void;
  onCommentPress: () => void;
}
