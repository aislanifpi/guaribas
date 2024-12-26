interface StartupCardProps {
  name: string;
}

export function StartupCard({ name }: StartupCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <div className="mt-4 w-12 h-1 bg-emerald-600"></div>
    </div>
  );
}