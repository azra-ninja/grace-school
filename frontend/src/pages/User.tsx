const User = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="[&>tr:nth-child(odd)]:bg-base-200">
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
