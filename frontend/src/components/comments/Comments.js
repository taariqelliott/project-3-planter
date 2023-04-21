import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../../api";
import './Comments.css'

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);


  // const URL = "https://plantdatabase.herokuapp.com/comments/";
  // const getComments = async () => {
  //   // make api call and get response
  //   const response = await fetch(URL);
  //   // turn response into javascript object
  //   const data = await response.json();
  //   console.log("line 23" + data);
  //   setBackendComments(data);
  // };

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );


  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId) //array of replies
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() //sort replies ascending
      );

//create comment
  const addComment = (text, username, parentId) => {
    createCommentApi(text, username, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
      //addd to local
    });
  };

  //Update comment
  const updateComment = (text, username, commentId) => {
    updateCommentApi(text, username).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text, username: username };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };



  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;