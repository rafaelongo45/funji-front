import "./grades.scss";

export default function RenderGrades() {
  const gradesArr = [
    "joyo",
    "jouyou",
    "jinmeiyo",
    "jinmeiyou",
    "grade-1",
    "grade-2",
    "grade-3",
    "grade-4",
    "grade-5",
    "grade-6",
    "grade-8",
  ];

  return gradesArr.map((grade) => {
    return (
      <button className="grade">
        <p>{grade}</p>
      </button>
    );
  });
}
