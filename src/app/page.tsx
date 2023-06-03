import Image from 'next/image';
import QuestionMarkLogo from '../../public/questionMark.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full min-h-screen gap-8">
      <div>
        <Image src={QuestionMarkLogo} alt="Question Mark" />
      </div>
      <div>
        <Link href="/main">
          <button className="max-w-[387px] w-full h-[81.5px] bg-[#03C988] border border-solid border-[#03C988] rounded-md px-2">
            <span className=" font-normal  text-3xl leading-[63px] text-[#050019] cursor-pointer ">
              Click to start
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
}
