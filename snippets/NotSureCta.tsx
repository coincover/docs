import { TalkToUs } from "/snippets/TalkToUs.tsx";

export const NotSureCta = () => {
  return (
    <div className="cc-cta flex w-full flex-col items-stretch gap-3.5 rounded-xl border border-gray-200 px-5 py-4 dark:border-white/10 sm:flex-row sm:items-center">
      <div className="flex-1">
        <div className="font-bold text-gray-900 dark:text-zinc-50">
          Not sure which product fits?
        </div>
        <div className="mt-0.5 text-sm text-gray-500 dark:text-zinc-400">
          Talk to us. Our team are here to help you get started.
        </div>
      </div>
      <TalkToUs />
    </div>
  );
};
