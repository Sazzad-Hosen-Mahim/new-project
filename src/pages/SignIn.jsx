import { Button } from "@nextui-org/react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContextProvider";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (userData) => {
    setIsLoading(true);
    const { email, password } = userData;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        setUser(result);

        navigate(from, { replace: true });

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-sm w-full  rounded-lg  shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-400">
          Login
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center text-white"
        >
          <div className="mb-4">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 bg-[#27272A] rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#27272A] px-3 py-2 rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.password && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <Button
            disabled={isLoading}
            className="w-full bg-blue-500 rounded-lg py-1 hover:bg-blue-600 text-white"
            type="submit"
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Signing Up
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>
        </form>
        <p className="mt-6 text-neutral-400 text-xs text-center">
          Dont’t Have An Account ?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            Register
          </span>
        </p>
        <GoogleButton
          type="dark"
          onClick={() => {
            googleSignIn()
              .then((result) => {
                console.log(result);
                setUser(result);

                navigate("/");
                setIsLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
      </div>
    </div>
  );
};

export default SignIn;
