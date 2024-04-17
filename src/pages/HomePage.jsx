import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDETGyAtuld-tNLUyuGjhbcFmYB8GKhluc");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [experince, setExperince] = useState("");
  const [school, setSchool] = useState("");
  const [college, setcollege] = useState("");
  const [pg, setPg] = useState("");
  const [cert, setCert] = useState("");
  const [ug, setUg] = useState("");
  const [skill, setSkill] = useState("");
  const [lan, setLan] = useState("");
  const [pc, setPc] = useState("");
  const [achie, setAchie] = useState("");
  const [ih, setIh] = useState("");
  const [response, setResponse] = useState("");

  async function aiRun() {
    event.preventDefault();
    const prompt = `Create a resume for ${name} with email ${email}, currently working as ${occupation}, residing at ${address}. Summary: ${summary}. Work Experience: ${experince}. Education: School - ${school}, College - ${college}, UG - ${ug}, PG - ${pg}. Certifications: ${cert}. Skills: ${skill}. Professional Contacts: ${pc}. Languages: ${email}. Achievements: ${achie}. Interests and Hobbies: ${ih}. Give the resume in harvard format. At the end of each topic, add a //. `;
    setLoading(true);
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setResponse(text);
      setLoading(false);
      navigate("/result", { state: text });
      
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    
  }

  return (
    <div className="p-10 bg-white rounded shadow-xl m-16">
      <h1 className="text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
        User Details
      </h1>
      <div className="divider"></div>

      <form className="space-y-5">
        <h2 className="text-2xl font-bold">Personal Details</h2>
        <div className="flex space-x-2">
          <input
            className="input input-bordered flex-grow"
            type="text"
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input input-bordered flex-grow"
            type="email"
            placeholder="Mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Current Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <input
          className="input input-bordered w-full"
          type="tel"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Summary</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Summary about the person in 100 - 150 words"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Work Experience</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Past to present work experiences"
          value={experince}
          onChange={(e) => setExperince(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-2">
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setcollege(e.target.value)}
          />
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="UG"
            value={ug}
            onChange={(e) => setUg(e.target.value)}
          />
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="PG"
            value={pg}
            onChange={(e) => setPg(e.target.value)}
          />
        </div>

        <h2 className="text-2xl font-bold">Certifications</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Certifications"
          value={cert}
          onChange={(e) => setCert(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Skills</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Skills"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Professional Contacts</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Professional Contacts"
          value={pc}
          onChange={(e) => setPc(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Languages</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="What are the communication languages that you know?"
          value={lan}
          onChange={(e) => setLan(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Achievements</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Tell us about your past achievements"
          value={achie}
          onChange={(e) => setAchie(e.target.value)}
        ></textarea>

        <h2 className="text-2xl font-bold">Interests and Hobbies</h2>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Interests and Hobbies"
          value={ih}
          onChange={(e) => setIh(e.target.value)}
        ></textarea>

        <button
          className="btn btn-primary btn-outline mt-10 glass w-28 text-lg"
          onClick={() => aiRun()}
        >
          Submit
        </button>
      </form>
      {loading ? <p>Loading...</p> : <div>{response}</div>}
    </div>
  );
}
