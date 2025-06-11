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
    <main className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="font-bold text-3xl italic">arlind's portfolio</h1>
      <div className="flex flex-row gap-8 items-start p-10">
        <div className="flex flex-col gap-1">
          <h1>{pageContent.profile.title}</h1>
          <div className="flex flex-col">
            {pageContent.profile.list.map((item, index) => (
              <a key={index} href={item[1]}>{item[0]}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
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