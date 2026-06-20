const MALE_STUDENTS = ["Iman", "Masoud", "Ali"];
const FEMALE_STUDENTS = ["Mahdieh", "Setareh"];

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "teacher":
      return {
        ...state,
        name: "Javid",
      };
    case "student":
      let studentList = FEMALE_STUDENTS;
      if (action.gender === "male") {
        studentList = MALE_STUDENTS;
      }
      const randomStudent =
        studentList[Math.floor(Math.random() * studentList.length)];
      return {
        ...state,
        name: randomStudent,
      };
    default:
      return state;
  }
};
