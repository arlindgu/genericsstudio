export default function SafariMockup() {

    return (
        <div>
        <div
          id="safari-mockup"
          className="self-center flex flex-col border-2 w-full"
        >
          <div className="flex flex-col aspect-[16/9] border">
            <div
              id="symbolmenu"
              className="border-b-2 h-1/12 flex flex-row items-center justify-between p-4 gap-2"
            >
              <div className="flex flex-row gap-2">
                <div className="w-3 h-3 border-1 border-butterfly-400 rounded-full bg-butterfly-300"></div>
                <div className="w-3 h-3 border-1 border-trinidad-400  rounded-full bg-trinidad-300"></div>
                <div className="w-3 h-3 border-1 border-night-400 rounded-full bg-night-300"></div>
              </div>
              <div className="w-full border h-5 rounded-full"></div>
            </div>
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-row justify-between items-center p-4 border-b border-night-500">
                <p>LOGO</p>
                <div className="flex flex-row gap-4">
                  <p>Home</p>
                  <p>About</p>
                  <p>Services</p>
                  <p>Contact</p>
                </div>
              </div>
              <div
                id="generic-hero"
                className="flex flex-row items-center justify-center h-full gap-8"
              >
                <div className="flex flex-col">
                  <p className="text-xl">Generic Boring Hero Text</p>
                  <p>Generic Boring Hero Subtext</p>
                  <div className="flex flex-row gap-4 mt-4">
                    <button className="bg-night">Click here</button>
                    <button className="bg-powder border-night border-2 text-night">Or maybe here?</button>
                  </div>
                </div>
                <div className="w-1/3 h-1/2 border-2"></div>
                <div className="flex flex-row gap-4 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}
    