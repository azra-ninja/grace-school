import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetStudent } from "../query/useGetStudent";
import { useUpdateStudent } from "../mutations/useUpdateStudent";

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [classGrade, setClassGrade] = useState("");
  const [age, setAge] = useState(0);
  const [department, setDepartment] = useState("")

  const { id } = useParams();
  const { data: student } = useGetStudent(id || "");
  const { mutate, isPending, error } = useUpdateStudent();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      id: id!,
      data: { name, classGrade, age, department },
    });
  }

  useEffect(() => {
    if (student) {
      setName(student.name);
      setClassGrade(student.classGrade);
      setAge(student.age);
      setDepartment(student.department);
    }
  }, [student])
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-[#0E1722] rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-16 mt-4 text-center">
          Update Student
        </h1>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Class:</label>
          <input
            type="text"
            placeholder="Class"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={classGrade}
            onChange={(e) => setClassGrade(e.target.value)}
          />
          <label>Age:</label>
          <input
            type="number"
            placeholder="Age"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <label>Department:</label>
          <input
            type="text"
            placeholder="Department"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <div className="flex">
            <Link
              to="/students"
              className="m-2 w-full bg-red-600 hover:bg-red-500 p-2 rounded mb-4 text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="m-2 w-full bg-[#0C0C2B] hover:bg-blue-600 p-2 rounded mb-4"
            >
              {isPending ? "Loading..." : "Submit"}
            </button>
            {error && (
              <p className="text-red-500 text-sm">
                {(error as any)?.response?.data?.message ||
                  "Something went wrong"}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
