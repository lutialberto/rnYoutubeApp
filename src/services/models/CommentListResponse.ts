export interface CommentListResponse {
  comments: Comment[];
}

export interface Comment {
  id: string;
  profileImageUrl: string;
  name: string;
  date: string;
  comment: string;
  likes: string;
  responses: string;
}
