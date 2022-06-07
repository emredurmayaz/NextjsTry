import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackTest = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackTest,
    };

    // Store in database
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFile(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Succes!", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This works" });
  }
}

export default handler;
