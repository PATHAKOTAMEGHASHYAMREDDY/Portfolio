import React from "react";
import { Timeline } from "../components/ui/timeline";

export function TimelineEducation() {
  const data = [
    {
      title: "2022-2026",
      content: (
        <div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
              B.Tech in Computer Science and Engineering
            </h4>
            <p className="text-blue-700 dark:text-blue-300 font-medium mb-3 text-sm">
              Kalasalingam Academy of Research and Education
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                CGPA: 8.93
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                Currently Pursuing
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2022",
      content: (
        <div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
              Intermediate (MPC)
            </h4>
            <p className="text-purple-700 dark:text-purple-300 font-medium mb-3 text-sm">
              Abhyas Junior College
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                88.8%
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium">
                Mathematics, Physics, Chemistry
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019-2020",
      content: (
        <div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
              X Class (Secondary Education)
            </h4>
            <p className="text-green-700 dark:text-green-300 font-medium mb-3 text-sm">
              Sri Ravindra High School
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                93.3%
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </section>
  );
}
