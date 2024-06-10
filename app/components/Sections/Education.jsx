export default function Education() {
  return (
    <section id="education">
      <h1 className="font-bold text-lg">EDUCATION</h1>{" "}
      <ul className="grid grid-cols-1 lg:grid-cols-2 ">
        <li className="p-4 m-6 bg-pink-700 rounded-3xl">
          <h2 className="text-lg font-bold">B.Sc in SWE, CSE</h2>
          <h3>GPA 3.93/4.00</h3>
          <p className="text-sm">
            Islamic University of Technology 2021-present{" "}
          </p>
        </li>
        <li className="p-4 m-6 bg-pink-700 rounded-3xl">
          <h2 className="text-lg font-bold">Cambridge A Level</h2>
          <h3>5A*, Daily Star Awardee</h3>
          <p className="text-sm">European Standard School • 2018-2020 </p>
        </li>
        <li className="p-4 m-6 bg-pink-700 rounded-3xl">
          <h2 className="text-lg font-bold">Cambridge O Level</h2>
          <h3> 6A* 1A 1B, Daily Star Awardee </h3>
          <p className="text-sm">European Standard School • 2018-2020 </p>
        </li>
      </ul>
    </section>
  );
}
