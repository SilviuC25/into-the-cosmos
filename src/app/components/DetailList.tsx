type DetailListProps = {
  details: Record<string, string>;
};

export default function DetailList({ details }: DetailListProps) {
  return (
    <dl className="divide-y divide-gray-200 text-sm bg-gray-50 rounded-xl overflow-hidden">
      {Object.entries(details).map(([key, value]) => (
        <div
          key={key}
          className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-3 sm:gap-4 even:bg-white"
        >
          <dt className="font-medium text-gray-900">{key}</dt>
          <dd className="text-gray-700 sm:col-span-2">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
