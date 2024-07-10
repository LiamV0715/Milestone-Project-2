import React from "react";

const sections = [
  {
    title: "ABOUT US",
    text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec velit ac
      nibh sagittis auctor. Aliquam erat volutpat. In eget erat eget libero congue
      aliquam at eu leo. Cras id risus velit. Vestibulum ante ipsum primis in faucibus
      orci luctus et ultrices posuere cubilia Curae; Sed ut quam in velit laoreet
      pulvinar ac sit amet tortor. Suspendisse at risus in mi bibendum scelerisque.
    `
  },
  {
    title: "How the Website Works!",
    text: `
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.
    `
  }
];

export default function Home() {
  return (
    <main>
      <h1>WELCOME!!!</h1>
      <a href="/gallery">Come take a look at our cute pets!!!</a>
      <div>
        <img
          src="https://images.unsplash.com/photo-1574168736634-44acc12f5221"
          alt="A cat laying on a floor"
        />
        <div>
          Cat by <a href="https://unsplash.com">unsplash</a>
        </div>
        {sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            <div style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
              <pre>{section.text}</pre>
            </div>
          </div>
        ))}
      </div>
      <a href="/Addapet">
        <button className="btn-primary">Add Your Own Pet</button>
      </a>
    </main>
  );
}