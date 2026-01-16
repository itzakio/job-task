import LoginForms from "@/components/forms/LoginForms";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-300 via-base-200 to-base-300 px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md rounded-2xl bg-base-100/70 backdrop-blur-xl shadow-2xl border border-base-300">
      <LoginForms/>
      </div>
    </div>
  );
};

export default Login;
