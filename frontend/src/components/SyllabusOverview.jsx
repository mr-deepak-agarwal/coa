import { courseData } from "../data/mockData";

export default function SyllabusOverview({ setSelectedUnit }) {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-4">
        {courseData.units.map((unit, index) => (
          <div
            key={index}
            onClick={() => setSelectedUnit(index)}
            className="bg-white p-5 rounded-xl shadow cursor-pointer hover:scale-105 transition"
          >
            <h3 className="font-bold text-lg">{unit.unit}</h3>
            <p className="text-gray-600">{unit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}