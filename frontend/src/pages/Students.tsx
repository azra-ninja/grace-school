import { useGetStudents } from "../query/useGetStudents";
import { Link } from "react-router-dom";
import type { Student } from "../types/Student";
import { useDeleteStudent } from "../mutations/useDeleteStudent";

const Students = () => {
  const { data: students, isLoading, error } = useGetStudents();
  const { mutate, isPending } = useDeleteStudent();

  const handleDeleteStudent = (id: string, name: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}`,
    );

    if (confirmDelete) {
      mutate(id);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <Link
          to="/students/create"
          className="bg-green-600 p-3 rounded-xl hover:bg-green-500"
        >
          Create a New Student
        </Link>
      </div>

        {isLoading ? "Loading..." : null}
        {error && (
          <p className="text-red-500 text-sm">
            {(error as any)?.response?.data?.message || "Something went wrong"}
          </p>
        )}

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Class</th>
              <th>Age</th>
              <th>Update & Delete</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(odd)]:bg-base-200">
            {students?.map((student: Student, index: number) => (
              <tr key={student._id}>
                <th>{index + 1}</th>
                <th>{student?.name}</th>
                <th>{student?.classGrade}</th>
                <th>{student?.age}</th>
                <th>
                  <Link
                    to={`/students/update/${student._id}`}
                    className="bg-yellow-500 p-3 m-2 rounded-lg hover:bg-yellow-400"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() =>
                      handleDeleteStudent(student._id, student.name)
                    }
                    className="bg-red-600 p-3 m-2 rounded-lg hover:bg-red-500"
                  >
                    {isPending ? "Deleting..." : "Delete"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Students;
