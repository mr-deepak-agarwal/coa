import { courseData } from "../data/mockData";

export default function UnitContent() {
  return (
    <div className="p-6 space-y-10">
      {courseData.units.map((unit, i) => (
        <div key={i}>
          <h2 className="text-3xl font-bold mb-4">
            {unit.unit} – {unit.title}
          </h2>

          {unit.topics.map((topic, j) => (
            <div key={j} className="bg-white p-5 rounded-xl shadow mb-6">
              <h3 className="text-xl font-semibold mb-3">
                {topic.name}
              </h3>

              <img
                src={topic.image}
                alt={topic.name}
                className="w-full max-w-xl rounded-lg mb-4"
              />

              <p className="text-gray-700">{topic.theory}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}