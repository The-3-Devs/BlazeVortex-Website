"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import CenteredDivPage from "@/ui/global/centered-div-page";

const queryClient = new QueryClient();

function UserData() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <ol className="ml-4 list-decimal marker:ml-4">
      {data.map((user: { selectedName: string; _id: string }) => (
        <li key={user._id} className="p-4 border-gray-200">
          <h2 className="text-xl font-semibold">{user.selectedName}</h2>
        </li>
      ))}
      <div>{isFetching ? "Updating..." : ""}</div>
    </ol>
  );
}

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <CenteredDivPage>
        <div>
          <h1 className="text-5xl font-bold">User List</h1>
          <br />
          <p className="text-gray-300">
            A list of all users who ran{" "}
            <code>
              <i>/f</i>
            </code>{" "}
            with Blaze
          </p>
        </div>
        <UserData />
      </CenteredDivPage>
    </QueryClientProvider>
  );
}
