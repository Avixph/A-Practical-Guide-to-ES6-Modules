{
  // From the components folder
  import { users, issues } from "../components";

  // From the layouts folder
  import { header, sidebar } from "../layouts";

  class Dashboard {
    loadDashboard() {
      // Invokes the methods
      users.loadUsers();
      issues.loadIssues();
      header.loadHeader();
      sidebar.loadSidebar();

      console.log("Dashboard component is loaded");
    }
  }

  export let dashboard = new Dashboard();
  dashboard.loadDashboard();

  // // From the components folder
  // import { Users } from "../components/users.js";
  // import { Issues } from "../components/issues.js";

  // // From the layouts folder
  // import { Header } from "../layouts/header.js";
  // import { Sidebar } from "../layouts/sidebar.js";

  // class Dashboard {
  //   loadDashboard() {
  //     // Create new instances
  //     const users = new Users();
  //     const issues = new Issues();
  //     const header = new Header();
  //     const sidebar = new Sidebar();

  //     console.log("Dashboard component is loaded");
  //   }
  // }

  // export { Dashboard };
  // const dashboard = new Dashboard();
  // dashboard.loadDashboard();
}
