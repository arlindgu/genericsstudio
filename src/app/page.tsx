interface PageContent {
  profile: {
    title: string;
    list: [string, string?][];
  };
  contact: {
    title: string;
    list: [string, string?][];
  };
}

const pageContent: PageContent = {
  profile: {
    title: "Profile",
    list: [
      ["Student"],
      ["Self-Taught"],
    ],
  },
  contact: {
    title: "Contact",
    list: [
      ["hey@arlind.io", "mailto:hey@arlind.io?subject=hey"],
      ["+41 79 896 69 96", "tel:0798966996"],
    ],
  }
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="self-center flex flex-row gap-4 m-auto p-4">
        <div className="flex flex-col gap-2">
          <h1>{pageContent.profile.title}</h1>
          <div className="flex flex-col">
            {pageContent.profile.list.map((item, index) => (
              <a key={index} href={item[1]}>{item[0]}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>{pageContent.contact.title}</h1>
          <div className="flex flex-col">
            {pageContent.contact.list.map((item, index) => (
              <a className="link font-[--font-instrument-sans] font-normal" key={index} href={item[1]}>{item[0]}</a>
            ))}
          </div>
        </div>
        </div>
    </main>
  );
}