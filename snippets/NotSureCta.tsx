import { TalkToUs } from "/snippets/TalkToUs.tsx";

export const NotSureCta = () => {
  return (
    <div className="flex w-full flex-col items-stretch gap-3.5 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 sm:flex-row sm:items-center">
      <div className="flex-1">
        <div className="font-bold text-gray-900">
          Not sure which product fits?
        </div>
        <div className="mt-0.5 text-sm text-gray-500">
          Talk to us and we&rsquo;ll point you at the right starting line.
        </div>
      </div>
      <TalkToUs />
    </div>
  );
};
