import { ChevronUp, ChevronDown, Star } from "./icons";

const Faq = () => {
  return (
    <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Here are answers to questions that get you up to speed
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How do I get started as a creator?
              </span>
            </button>

            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                Connect your wallet, create a campaign and set milestones.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How do I get started as an influencer?
              </span>
            </button>

            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                Connect your wallet, browse through active campaigns and select
                your most applicable.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                What happens next?
              </span>
            </button>

            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                The system matches both creator and influencer and the
                influencer gets paid as they reach set milestones. The more
                deliveries, the better the influencer on-chain ratings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
