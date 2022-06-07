import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { extractFeedback, buildFeedbackPath } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedBackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((reponse) => response.json())
      .then((data) => {
        setFeedBackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
      <Fragment>
          {feedbackData && <p>{feedbackData.email}</p>}
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.key}>
          {item.text}
          <button onClick={loadFeedbackHandler.bind(null, item.id)}>
            Show Details
          </button>
        </li>
      ))}
    </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
