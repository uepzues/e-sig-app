import { useState } from "react";

export default function ESigApp() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState(`-Date of Birth-`);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDate = (e) => {
    const dateInput = e.target.value;
    const d = new Date(dateInput);

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    function add0(x) {
      return x.toString().padStart(2, "0");
    }

    const wholeDate = add0(day) + `-` + add0(month) + `-` + year;

    setDOB(wholeDate);
  };

  return (
    <>
      <main className="font-koulen h-screen flex justify-center items-center">
        <div className="mx-5 max-w-lg shadow-md shadow-black bg-blue-500 rounded-3xl flex flex-col justify-center items-center border-blue-900 border-solid border-8">
          <h1 className="font-black underline text-center text-4xl mt-6">
            {name == "" ? "Full Name" : name}
          </h1>
          <h2 className="font-sans font-semibold m-6 text-2xl">{dob}</h2>
          <p className="p-6 font-sans m-4">
            Exercitation ad et aute amet nostrud laborum ut ut quis excepteur.
            Dolore commodo laborum nisi deserunt. Excepteur in laboris in nisi
            dolore ipsum incididunt consectetur commodo. Laboris quis sit quis.
          </p>
          <input
            className="h-[50px]] px-2 border-x-0 border-t-0 bg-blue-500 border-b border-black"
            type="date"
            onChange={handleDate}
          />
          <input
            className="bg-blue-500 text-center border-solid border-b-black border-b border-x-0 border-t-0 m-8 placeholder:text-center placeholder:text-black text-black"
            placeholder="Full Name"
            type="text"
            value={name}
            onChange={handleName}
          />
        </div>
      </main>
    </>
  );
}
