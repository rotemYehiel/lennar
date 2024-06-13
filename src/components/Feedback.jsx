import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFeedback } from "../store/actions/headerAction";

const Feedback = () => {
  const [feedback, setFeedbackText] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(setFeedback(feedback));
    alert("Sent!");
    setFeedbackText("");
  };

  return (
    <div>
      <textarea
        value={feedback}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder="Send me a feedback"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Feedback;
