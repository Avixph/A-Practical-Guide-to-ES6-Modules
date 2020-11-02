{
  import { UserProfile } from "../components/users-profile.js";

  class Header {
    loadHeader() {
      // Creates a new instance
      const userProfile = new UserProfile();

      // Invokes the method (component)
      userProfile.loadUserProfile();

      // Outputs the loading status
      console.log("Header component is loaded...");
    }
  }

  export { Header };
}
