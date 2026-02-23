import { courseData } from "../data/mockData";

export default function SyllabusOverview() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">
        {courseData.title} ({courseData.code})
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {courseData.units.map((unit, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h3 className="font-bold text-lg">{unit.unit}</h3>
            <p className="text-gray-600">{unit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}