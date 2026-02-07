import KanbanBoard from "@/components/kanban-board";
import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import React, { Suspense } from "react";

async function getBoard(userId: string) {
  "use cache";

  await connectDB();

  const boardDoc = await Board.findOne({
    userId,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
      model: "JobApplication",
    },
  });

  if (!boardDoc) return null;

  return JSON.parse(JSON.stringify(boardDoc));
}

async function DashboardPage() {
  const session = await getSession();
  const userId = session?.user.id ?? "";
  const board = await getBoard(userId);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        {/* SAME WRAPPER AS KANBAN */}
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            {/* Header starts EXACTLY where columns start */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-black">
                Job Hunt
              </h1>
              <p className="text-gray-600">
                Track your job applications
              </p>
            </div>

            {/* Kanban */}
            <div className="overflow-x-auto">
              <KanbanBoard board={board} userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DashboardPage />
    </Suspense>
  );
}
