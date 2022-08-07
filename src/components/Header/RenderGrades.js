import generateNumber from "../utils/randomNumber.js";

import "./assets/grades.scss";

export default function RenderGrades({ navigate, setSidebarClick }) {
  const gradesArr = [
    { name: "Joyo", urlName: "joyo" },
    { name: "Joyo 2", urlName: "jouyou" },
    { name: "Jinmeyo", urlName:"jinmeiyo" },
    { name: "Jinmeyo 2", urlName:"jinmeiyou" },
    { name: "Grade 01", urlName:"grade-1" },
    { name: "Grade 02", urlName:"grade-2" },
    { name: "Grade 03", urlName:"grade-3" },
    { name: "Grade 04", urlName:"grade-4" },
    { name: "Grade 05", urlName:"grade-5" },
    { name: "Grade 06", urlName:"grade-6" },
    { name: "Grade 08", urlName:"grade-8" },
  ];

  return gradesArr.map((grade) => {
    return (
      <button className="grade" onClick={() => {setSidebarClick(false); navigate(`/`, {state: {collection: grade.urlName}})}} key={grade + generateNumber()}>
        <p className="grade-title">{grade.name}</p>
      </button>
    );
  });
}
