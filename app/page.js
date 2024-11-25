import Image from "next/image";
import Link from "next/link";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-[85rem]">
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-4">
                AI Room and Home 
                <span className="text-primary"> Interior Design</span>
              </h1>
              <p className="text-lg">
                Transform Your Space with AI: Effortless Room & Home Interior Design at Your Fingertips!
              </p>
            </div>

            {/* Get Started Button */}
            <div className="flex justify-center mb-8">
              <Link href="/dashboard" className="btn btn-primary gap-2">
                Get started
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>

            {/* Main Image */}
            <div className="flex justify-center mb-16">
              <Image src={'/group.png'} alt="mockup" width={1000} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}