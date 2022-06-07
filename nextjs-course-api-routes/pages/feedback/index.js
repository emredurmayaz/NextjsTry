import { extractFeedback, buildFeedbackPath } from "../api/feedback";

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.key}>{item.text}</li>
      ))}
    </ul>
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
