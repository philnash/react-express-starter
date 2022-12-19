import CreateUserForm from "../components/CreateUserForm";
import Login from "../components/Login";

function ProfilePage() {
  return (
    <div>    
      <Login />
      <h2>or</h2>
      <CreateUserForm />
    </div>
  );
}

export default ProfilePage;
