import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

const Login = () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="projectmay@mail.co"
          type="email"
          name="email"
        />
        <Label htmlFor="password">Password Address</Label>
        <Input
          id="password"
          placeholder="*****"
          type="password"
          name="password"
          className="mb-6"
        />

        <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 to-neutral-600 block dark:bg0zince-800 w-full text-white rounded-md h-10 font-medium">
          Login &rarr;
        </button>
        <p className="text-neutal-600 text-sm max-2-sm mt-2 dark:text-neutral-300">
          Don't have an account ? <Link href="/register">Register</Link>
        </p>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"></div>

        <section className="flex flex-col space-y-4 ">
          <form>
            <button>
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Github
              </span>
            </button>
          </form>

          <form>
            <button>
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
            </button>
          </form>
        </section>
      </form>
    </div>
  );
};

export default Login;
