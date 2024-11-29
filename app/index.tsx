import { Redirect } from "expo-router";

const Page = () => {
  // todo: we have to check later on if the user is logged in or not and the redirect it to the welcome pages

  return <Redirect href={`/(auth)/welcome`} />;
};

export default Page;
