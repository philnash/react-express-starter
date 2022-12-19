import CreateUserForm from "../components/CreateUserForm";
import Login from "../components/Login";

function ProfilePage() {
  return (
    <div>
      {/* <main>
        <h1>ProfilePage</h1>
        <br/>
      </main>
      <button>Log In</button> */}
      {/* <button>Create User</button> */}
      
      <CreateUserForm />
      <Login />
      <p>or</p>
    </div>
  );
}

export default ProfilePage;
