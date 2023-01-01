import CreateUserForm from "../components/CreateUserForm";
import Login from "../components/Login";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* <Login /> // we cannot have two forms with the same information on the same page because the values need to be different. 
      <h2>or</h2>
      <CreateUserForm /> */}
      <a href="./Login">
        <button>Log In</button>
      </a>
      <h2>OR</h2>
      <a href="./CreateUser">
        <button>Create User</button>
      </a>
    </div>
  );
}

export default ProfilePage;
