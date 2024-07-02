import { fetchAllUsers } from "@/action/user";
import { getSession } from "@/lib/getSession";
import { User } from "@/models/Users";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const Settings = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    return redirect("/");
  }

  if (user?.role !== "admin") {
    return redirect("/private/dashboard");
  }

  const allUsers = await fetchAllUsers();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <table className="w-full rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Here we will render the users and we will be able to delete them */}
          {allUsers.map((user) => (
            <tr key={user._id}>
              <td className="p-2">{user.firstName}</td>
              <td className="p-2">{user.lastName}</td>
              <td className="p-2">
                <form
                  action={async () => {
                    "use server";
                    await User.findByIdAndDelete(user._id);
                    revalidatePath("/private/settings");
                  }}
                >
                  <button className="px-2 py-1 text-red-500 hover:bg-red-100 rounded focus:outline-none">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
