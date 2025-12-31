import StackedCubes from "../../../assets/stackedCubes.png";
import g1 from "../../../assets/g1.jpg";
import { setIsNotificationDropdownOpen } from "../../../store/features/hrdashboard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";

const HRDashboardTopbar = () => {
  const dispatch = useDispatch();
  const isNotificationDropdownOpen = useSelector(
    (state: RootState) => state.hrdashboard.isNotificationDropdownOpen
  );

  return (
    <nav className="flex items-center p-4 text-white justify-between border-b border-gray-800 px-5">
      {/* Logo Section */}
      <div className="flex gap-x-6 items-center">
        <img
          src={StackedCubes}
          alt="Workflow Manager Logo"
          className="invert-100 h-10 w-10"
        />
      </div>

      {/* Right Section - Actions */}
      <div className="flex gap-x-4 items-center">
        <label htmlFor="search-input" className="sr-only">
          Search Automata
        </label>
        <input
          id="search-input"
          type="text"
          className="bg-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Automata"
          aria-label="Search automations"
        />

        <button
          className="px-6 py-2 bg-blue-700 rounded-full cursor-pointer flex items-center gap-x-2 hover:bg-blue-800 transition-colors"
          aria-label="Create new automation"
        >
          Create
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>

        <button aria-label="View notifications">
          <div
            className="group relative"
            onClick={() =>
              dispatch(
                setIsNotificationDropdownOpen(!isNotificationDropdownOpen)
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
              color="lightgray"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div className="absolute">
              {isNotificationDropdownOpen && (
                <div className="absolute bg-gray-800 mt-3 rounded-lg w-80 right-0 shadow-xl border border-gray-700 overflow-hidden z-50">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                      Mark all read
                    </button>
                  </div>

                  {/* Notification Items */}
                  <div className="max-h-96 overflow-y-auto">
                    {/* Notification 1 */}
                    <div className="p-4 hover:bg-gray-700 transition-colors cursor-pointer border-b border-gray-700/50">
                      <div className="flex gap-3">
                        <div className="shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-200">
                            <span className="font-semibold">
                              Workflow completed
                            </span>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            "Email Campaign Automation" ran successfully
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            2 minutes ago
                          </p>
                        </div>
                        <div className="shrink-0">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Notification 2 */}
                    <div className="p-4 hover:bg-gray-700 transition-colors cursor-pointer border-b border-gray-700/50">
                      <div className="flex gap-3">
                        <div className="shrink-0">
                          <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-200">
                            <span className="font-semibold">
                              Action required
                            </span>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            "Data Sync" workflow needs approval
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            1 hour ago
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 3 */}
                    <div className="p-4 hover:bg-gray-700 transition-colors cursor-pointer border-b border-gray-700/50">
                      <div className="flex gap-3">
                        <div className="shrink-0">
                          <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-200">
                            <span className="font-semibold">
                              Workflow failed
                            </span>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            "Daily Report" encountered an error
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            3 hours ago
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Notification 4 */}
                    <div className="p-4 hover:bg-gray-700 transition-colors cursor-pointer opacity-75">
                      <div className="flex gap-3">
                        <div className="shrink-0">
                          <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-200">
                            <span className="font-semibold">
                              New team member
                            </span>
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            Sarah joined your workspace
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Yesterday
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-3 bg-gray-750 border-t border-gray-700">
                    <button className="w-full text-center text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </button>

        <button
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open profile menu"
        >
          <img src={g1} alt="User profile" className="h-10 w-10 rounded-full" />
        </button>
      </div>
    </nav>
  );
};

export default HRDashboardTopbar;
