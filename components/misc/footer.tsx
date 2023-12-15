import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-900">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-indigo-300">
            <PreviewLink href="/statically-generated"> amp second-brain </PreviewLink> with Obsidian and NextJS 14
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://www.facebook.com/saradotkhan`}
              className="mx-3 bg-indigo-700 hover:text-pink-700 border border-black text-indigo-300 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              FACEBOOK
            </a>
            <a
              href={`https://github.com/sarakhanx/second-brain`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer