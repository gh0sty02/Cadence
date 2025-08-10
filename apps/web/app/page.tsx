import { Input } from "@repo/ui/components/ui/input";
import { authClient } from "./lib/auth-client";
import { Button } from "@repo/ui/components/ui/button";
import { Select } from "@repo/ui/components/ui/select";

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
      <Button variant="primary" size="xs">
        Primary
      </Button>
      <Input />
      <Select />
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
    </main>
  );
}
