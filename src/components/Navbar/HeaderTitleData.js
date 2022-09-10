export const headerTitle = (location) => {
  let loc_name = location.pathname;
  if (loc_name.includes("customers")) {
    return "Customers";
  } else if (loc_name.includes("mood-board")) {
    return "Mood Boards";
  } else if (loc_name.includes("mood-board")) {
    return "Mood Boards";
  } else if (loc_name.includes("reporting")) {
    return "Reporting";
  } else if (loc_name.includes("templates")) {
    return "templates";
  } else if (loc_name.includes("events")) {
    return "Events";
  } else if (loc_name.includes("supplier")) {
    return "Suppliers";
  } else if (loc_name.includes("payments")) {
    return "Payments";
  } else if (loc_name.includes("consultation")) {
    return "Consultation";
  } else if (loc_name.includes("users")) {
    return "Users";
  } else if (loc_name === "/") {
    return "Dashboard";
  } else {
    return "No header name";
  }
};
