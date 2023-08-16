import { useSession, signIn, signOut } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();
  const logOut = async () => {
    const data = await signOut({
      callbackUrl: `/influencer`,
      redirect: false,
    });
  };

  return (
    <>
      <h3 className="mb-6">Connect your socials</h3>
      <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
        {status === "authenticated" ? (
          <>
            <div className="mt-4">
              <h3>Welcome {session?.user?.name}</h3>
            </div>

            <button
              onClick={() => logOut()}
              className="bg-black text-white leading-none px-2 py-2 rounded-md"
            >
              Disconnect
            </button>
          </>
        ) : (
          <div
            className="mt-4"
            onClick={() =>
              signIn("twitter", {
                callbackUrl: `/influencer`,
              })
            }
          >
            <button className="bg-black text-white leading-none px-2 py-2 rounded-md">
              Connect twitter
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Account;
