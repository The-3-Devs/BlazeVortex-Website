"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import CenteredDivPage from "@/ui/global/centered-div-page";
import React from "react";

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

  interface UserData {
    selectedName: string;
    _id: string;
    usageCount: number;
  }

  return (
    <>
      <table className="ml-4 text-left rounded-none table-auto">
        <thead className="rounded-none border-[#ededed] border-2">
          <tr className="p-4 rounded-none bg-gray-900 border-[#ededed] border-2">
            <th className="text-xl font-semibold rounded-none border-[#ededed] border-2 p-2">
              Ranking
            </th>
            <th className="text-xl font-semibold rounded-none border-[#ededed] border-2 p-2">
              Name
            </th>
            <th className="text-xl font-semibold rounded-none border-[#ededed] border-2 p-2">
              Usage Count
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a: UserData, b: UserData) => b.usageCount - a.usageCount)
            .map((user: UserData, i: number) => (
              <React.Fragment key={user._id}>
                <tr className="p-4 rounded-none border-[#ededed] border-2 even:bg-gray-900 odd:bg-gray-900/75">
                  <td className="text-xl font-semibold rounded-none border-[#ededed] border-2 p-2">{i+1}</td>
                  <td className="text-xl font-semibold rounded-none border-[#ededed] border-2 p-2">
                    {user.selectedName}
                  </td>
                  <td className="rounded-none border-[#ededed] border-2 p-2">
                    {user.usageCount}
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
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
