import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Profile = () => {
  const { data: session, status } = useSession();

  const logOut = async () => {
    const data = await signOut({
      callbackUrl: `/influencer`,
      redirect: false,
    });
  };

  return (
    <div
      className="m-auto my-6 w-screen max-w-sm rounded-lg border border-gray-200 p-4 pt-4 shadow-sm sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          <li key={session?.user?.id} className="flex items-center gap-4">
            <img
              src={session?.user?.image}
              alt={session?.user?.name}
              className="h-16 w-16 rounded object-contain"
            />
            <div>
              <h3 className="text-sm text-gray-900">{session?.user?.name}</h3>
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dd className="inline font-bold">
                    @{session?.user?.username}
                  </dd>
                </div>
              </dl>
            </div>
          </li>
        </ul>

        {status === "authenticated" ? (
          <div className="space-y-4 text-center">
            <button
              onClick={() => logOut()}
              type="button"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              signIn("twitter", {
                callbackUrl: `/influencer`,
              })
            }
            type="button"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Connect Twitter
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
