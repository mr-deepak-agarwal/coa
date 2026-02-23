import { courseData } from "../data/mockData";

export default function UnitContent({ selectedUnit }) {
  if (selectedUnit === null) {
    return (
      <div className="text-center text-white mt-10 text-xl">
        Select a Unit to Begin
      </div>
    );
  }

  const unit = courseData.units[selectedUnit];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-white">
        {unit.unit} – {unit.title}
      </h2>

      {unit.topics.map((topic, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">{topic.name}</h3>

          <img
            src={topic.image}
            alt={topic.name}
            className="w-full max-w-xl rounded-lg mb-4"
          />

          <p>{topic.theory}</p>
        </div>
      ))}
    </div>
  );
}