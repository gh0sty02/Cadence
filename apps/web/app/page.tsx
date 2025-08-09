import { authClient } from "./lib/auth-client";
import { Button } from "@repo/ui/components/ui/button";

export default async function Page() {
  const { data, error } = await authClient.signIn.email({
    email: "test@test.com",
    password: "test@123456",
    callbackURL: "/test",
  });

  console.log({ data, error });
  return (
    <main>
      <p>Hello {data?.user.name}</p>
      <Button>Click me</Button>
    </main>
  );
}
