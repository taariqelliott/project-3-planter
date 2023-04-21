import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);

  const [username, setUserName] = useState("");

  const { user, isAuthenticated } = useAuth0();

  console.log("line 16: authenticated?", isAuthenticated)

  const isTextareaDisabled = text.length === 0;


  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, username);
    setText("");
    return (isAuthenticated && (
      setUserName(user.name)
     ))
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;