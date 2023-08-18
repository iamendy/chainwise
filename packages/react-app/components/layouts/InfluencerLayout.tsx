import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const InfluencerLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <section className="mx-auto max-w-7xl flex gap-x-4 px-4 pt-5 h-full">
      <aside className="hidden lg:block w-[30%]  py-8 rounded-md">
        <div className="mx-auto my-4 px-3 max-w-2xl">
          <div className="flex flex-col gap-y-2">
            <Link
              href="/influencer"
              className={`px-4 py-2 border ${
                router.asPath == "/influencer" && "bg-gray-300"
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/influencer/view-campaigns"
              className={`px-4 py-2 border ${
                router.asPath == "/influencer/view-campaigns" && "bg-gray-300"
              }`}
            >
              Listed Campaigns
            </Link>

            <Link
              href="/influencer/account"
              className={`px-4 py-2 border ${
                router.asPath == "/influencer/account" && "bg-gray-300"
              }`}
            >
              Manage Account
            </Link>
          </div>
        </div>
      </aside>

      <main className=" bg-gray-50 py-8 w-full rounded-md ">
        <div className="mx-auto my-4 max-w-2xl">
          {status == "authenticated" ? (
            <div>{children}</div>
          ) : status == "unauthenticated" ? (
            <div className="rounded-xl bg-white p-4 shadow flex flex-col gap-y-2">
              <h3>To get started, Please connect your Twitter</h3>

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
            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </main>
    </section>
  );
};

//ensures
InfluencerLayout.auth = true;

export default InfluencerLayout;
