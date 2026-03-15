import { useMemo, useState } from "react";
import headshot from "./assets/photos/headshot.webp";
import campusPhoto from "./assets/photos/wayne.webp";
import labPhoto from "./assets/photos/lab.webp";
import hobbyPhoto from "./assets/photos/hobby.webp";

const apiBase = "https://car-classifier-1jch.onrender.com";

const profile = {
  name: "Mary Navaroli",
  title: "Senior Computer Science Student",
  summary:
    "I am a senior computer science student with four years of programming experience at Wayne State University. I am looking to apply my work experience and programming skills in an engaging internship or entry-level position.",
  phone: "(586) 904-6279",
  email: "navaroli.mary@yahoo.com",
};

const education = {
  school: "Wayne State University",
  timeframe: "Aug 2021 - May 2026",
  details: [
    "GPA: 3.35",
    "Credits completed: 108 out of 120",
    {
      title: "General Motors Public Policy Analytics Captone Project ",
      items: [
        "Created machine learning model to predict whether a bill will pass into law",
        "Created database population scripts to gather data from APIs and CSV files",
        "Implemented normalized database tables in a bronze, silver, and gold schema structure",
        "Utilized semantic vector embeddings for text inputs to bill prediction model",
      ],
    },
    {
      title: "Used Java, C++, and Python to complete coursework",
      items: [
        "Implemented various sorting and searching algorithms",
        "Utilized data structures such as trees and linked lists",
        "Demonstrated knowledge of object-oriented programming",
      ],
    },
    "Used React, HTML, CSS, and JavaScript in front-end web development",
    "Set up normalized PostgreSQL and SQLite databases with tiered schemas ",
    "Completed Machine Learning/AI Engineer course on Codecademy",
    "Set up server using Render to receive data from personal website and return predictions from machine learning models",
    "Familiar with using Git version control and GitHub repositories",
    "Followed the Agile Framework to develop and complete projects",
  ],
};

const experience = {
  company: "Axalta Coating Systems",
  timeframe: "Jun 2022 - Nov 2025",
  details: [
    "Managed projects from start to finish by planning testing timelines, communicating with outside labs, and adhering to testing requirements to meet customer needs.",
    "Successfully and frequently communicated with my team to coordinate project timing, verify project requirements, and determine the proper path forward to resolve issues with testing.",
    "Performed a multitude of weathering, chemical, impact, and adhesion resistance tests to evaluate coating quality.",
    "Recorded and analyzed appearance, hardness, color, and gloss data to determine testing effects on coatings over plastic and metal substrates.",
    "Performed daily lab inspections to maintain safe lab conditions and ensure that equipment is functional and calibrated.",
  ],
};

const hobbies = [
  {
    title: "Maintaining my 1995 Mazda Miata",
    items: [
      "Performing basic maintenance items",
      "Replaced AC system",
      "Replaced transmission seals",
    ],
  },
  {
    title: "Learning Russian",
    items: ["Self-studying books, movies, music, etc."],
  },
];

const bodyOptions = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Small Passenger Van",
  "Liftback Sedan",
];

function DetailList({ items }) {
  return (
    <ul className="detail-list">
      {items.map((item) =>
        typeof item === "string" ? (
          <li key={item}>{item}</li>
        ) : (
          <li key={item.title}>
            {item.title}
            <ul className="nested-list">
              {item.items.map((subItem) => (
                <li key={subItem}>{subItem}</li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );
}

function ResumeSection({ id, eyebrow, title, subtitle, image, imageAlt, children }) {
  return (
    <section className="resume-section" id={id}>
      <div className="section-image-wrap">
        <img className="section-image" src={image} alt={imageAlt} />
      </div>
      <div className="section-card">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [brandMessage, setBrandMessage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isClassifying, setIsClassifying] = useState(false);
  const [predictionMessage, setPredictionMessage] = useState("");
  const [isPredicting, setIsPredicting] = useState(false);
  const [evForm, setEvForm] = useState({
    speed: "",
    torque: "",
    charging: "",
    height: "",
    body: "",
  });

  const stats = useMemo(
    () => [
      { label: "Expected Graduation", value: "May 2026" },
      { label: "GPA", value: "3.35" },
    ],
    [],
  );

  async function handleImageSubmit(event) {
    event.preventDefault();
    const file = event.target.elements.image.files[0];

    if (!file) {
      setBrandMessage("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setIsClassifying(true);
    setBrandMessage("");
    setImagePreview(URL.createObjectURL(file));

    try {
      const response = await fetch(`${apiBase}/classify`, {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      const result = await response.json();
      setBrandMessage(`Your car is a: ${result.class}`);
    } catch (error) {
      setBrandMessage(`Error uploading image: ${error}`);
    } finally {
      setIsClassifying(false);
    }
  }

  function handleEvInputChange(event) {
    const { name, value } = event.target;
    setEvForm((current) => ({ ...current, [name]: value }));
  }

  async function handleEvSubmit(event) {
    event.preventDefault();

    const { speed, torque, charging, height, body } = evForm;

    if (!speed || !torque || !charging || !height || !body) {
      setPredictionMessage("Please provide input for all fields");
      return;
    }

    if (Number(speed) < 125 || Number(speed) > 325) {
      setPredictionMessage("Top Speed must be within range 125 to 325 km/hr");
      return;
    }

    if (Number(torque) < 113 || Number(torque) > 1350) {
      setPredictionMessage("Torque must be within range 113 to 1350 nm");
      return;
    }

    if (Number(charging) < 29 || Number(charging) > 281) {
      setPredictionMessage("Fast Charging Power must be within range 29 to 281 kW DC");
      return;
    }

    if (Number(height) < 1329 || Number(height) > 1986) {
      setPredictionMessage("Vehicle Height must be within range 1329 to 1986 mm");
      return;
    }

    setIsPredicting(true);
    setPredictionMessage("");

    try {
      const response = await fetch(`${apiBase}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          speed,
          torque,
          charging,
          height,
          body,
        }),
        mode: "cors",
      });

      const result = await response.json();
      setPredictionMessage(`Efficiency: ${result.prediction.toFixed(2)} Wh/km`);
    } catch (error) {
      setPredictionMessage(`Error uploading data: ${error}`);
    } finally {
      setIsPredicting(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-mark" href="#top">
          {profile.name}
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Resume Website</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="stat-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-card">
              <img src={headshot} alt="Headshot of Mary Navaroli" />
            </div>
          </div>
        </section>

        <ResumeSection
          id="education"
          eyebrow="Education"
          title={education.school}
          subtitle={education.timeframe}
          image={campusPhoto}
          imageAlt="Wayne State University campus"
        >
          <DetailList items={education.details} />
        </ResumeSection>

        <ResumeSection
          id="experience"
          eyebrow="Work Experience"
          title={experience.company}
          subtitle={experience.timeframe}
          image={labPhoto}
          imageAlt="Painted panels undergoing outdoor weathering testing"
        >
          <DetailList items={experience.details} />
        </ResumeSection>

        <ResumeSection
          id="hobbies"
          eyebrow="Hobbies"
          title="Interests Outside Work"
          image={hobbyPhoto}
          imageAlt="My cat, Miata"
        >
          <DetailList items={hobbies} />
        </ResumeSection>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Machine Learning Demos</h2>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <p className="project-type">K Nearest Neighbors Algorithm</p>
              <h3>Car Image Classifier</h3>
              <p>
                The K Nearest Neighbors algorithm is a supervised machine learning approach. It
                compares a new data point against training data, calculates distance across
                features, and assigns the label shared by the majority of the closest neighbors.
              </p>
              <p>
                Upload an image of an Audi, Hyundai, or Toyota and the classifier will predict the
                brand.
              </p>

              <form className="project-form" onSubmit={handleImageSubmit}>
                <label htmlFor="image">Upload JPEG</label>
                <input id="image" name="image" type="file" accept="image/jpeg,.jpeg,.jpg" />
                <button type="submit" disabled={isClassifying}>
                  {isClassifying ? "Classifying..." : "Upload"}
                </button>
              </form>

              {brandMessage ? <p className="result-text">{brandMessage}</p> : null}
              {imagePreview ? (
                <img className="preview-image" src={imagePreview} alt="User uploaded car" />
              ) : null}
            </article>

            <article className="project-card">
              <p className="project-type">Bagging Regression</p>
              <h3>Electric Vehicle Efficiency Predictor</h3>
              <p>
                Using top speed, torque, fast charging power, height, and body style data from 478
                EV models, this bagging regressor was trained to predict EV Efficiency. The Bagging
                Regressor uses 50 K-Neighbors Regressors to make its final prediction. Sequential
                Forward Selection was used to select 5 features. Grid Search was used to select 50
                estimators. The validation R Squared score for this model is 0.78.
              </p>

              <form className="project-form project-form-grid" onSubmit={handleEvSubmit}>
                <label htmlFor="speed">Enter Top-Speed (km/hr)</label>
                <input
                  id="speed"
                  name="speed"
                  type="number"
                  value={evForm.speed}
                  onChange={handleEvInputChange}
                />

                <label htmlFor="torque">Enter Vehicle Torque (nm)</label>
                <input
                  id="torque"
                  name="torque"
                  type="number"
                  value={evForm.torque}
                  onChange={handleEvInputChange}
                />

                <label htmlFor="charging">Enter Fast Charging Power (kW DC)</label>
                <input
                  id="charging"
                  name="charging"
                  type="number"
                  value={evForm.charging}
                  onChange={handleEvInputChange}
                />

                <label htmlFor="height">Enter Vehicle Height (mm)</label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  value={evForm.height}
                  onChange={handleEvInputChange}
                />

                <label htmlFor="body">Select Body Style</label>
                <select id="body" name="body" value={evForm.body} onChange={handleEvInputChange}>
                  <option value="">Body Style</option>
                  {bodyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button type="submit" disabled={isPredicting}>
                  {isPredicting ? "Predicting..." : "Upload"}
                </button>
              </form>

              {predictionMessage ? <p className="result-text">{predictionMessage}</p> : null}
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect</h2>
            <p>
              I&apos;m looking for internship or entry-level opportunities where I can contribute my software development skills and continue to grow.
            </p>
            <div className="contact-grid">
              <a href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}>
                <span>Phone</span>
                <strong>{profile.phone}</strong>
              </a>
              <a href={`mailto:${profile.email}`}>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
