import { register } from "@/action/user";
import { Input } from "../../components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = async () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-nont md:rounded-2xl p-4 md:p-8 shadown-input bg-white border-[#121212] dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutal-200">
        Welcome to MyShop
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all the necessary information
      </p>
      <form action={register} className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              name="firstname"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              name="lastname"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="projectmay@fc.com"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="*****"
              type="password"
              name="password"
              className="mb-2"
            />
          </div>
        </div>
        <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 to-neutral-600 block dark:bg0zince-800 w-full text-white rounded-md h-10 font-medium">
          Sign up &rarr;
        </button>

        <p className="text-neutal-600 text-sm max-2-sm mt-2 dark:text-neutral-300">
          Already have an account ? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
