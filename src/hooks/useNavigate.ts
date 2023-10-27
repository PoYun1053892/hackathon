import {
  NavigateOptions,
  useNavigate as useRouteNavigate,
} from "@reach/router";

const useNavigate = () => {
  const navigate = useRouteNavigate();
  const basePath = process.env.BASE_PATH !== "/" ? process.env.BASE_PATH : "";

  const navigateTo = (
    path: string,
    state?: NavigateOptions<Record<string, never>>
  ) => {
    navigate(`${basePath}${path}`, {
      state,
    });
  };

  return { navigateTo };
};

export default useNavigate;
