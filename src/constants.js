export const ROUTE_HOME = "/";
export const ROUTE_EXPENSES_PREFIX = "/expenses";
export const ROUTE_EXPENSES_CHART = "/expenses/chart";
export const ROUTE_SETTINGS_PREFIX = "/settings";

export const EXPENSES_OPTIONS = [
  "Expenses",
  [
    { title: "All Expenses", url: ROUTE_EXPENSES_PREFIX },
    { title: "Expenses Chart", url: ROUTE_EXPENSES_CHART },
  ],
];

export const SETTINGS_OPERATIONS = {
  name: "Settings",
  operations: ["Settings"],
};
