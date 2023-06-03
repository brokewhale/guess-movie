import React from 'react';
import QuestionMarkLogo from '../../../public/questionMark.png';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center h-full min-h-screen gap-8 p-6">
      <Link href="/">
        <div>
          <Image src={QuestionMarkLogo} alt="Question Mark" />
        </div>
      </Link>
      <h1 className="font-normal text-7xl leading-[63px] text-center text-white">
        Guess the Movie
      </h1>

      <section className="flex justify-center w-full">
        <div className="w-full max-w-[1075px] h-32 rounded-md border border-solid border-white flex items-center justify-evenly flex-col gap-3">
          <div className="flex items-center justify-center gap-6">
            <div className=" font-normal  text-3xl leading-[63px] text-white">
              Movie Hint
            </div>
            <button className=" font-semibold w-[85px] h-9 rounded-lg bg-[#03C988] cursor-pointer text-sm text-[#050019]">
              More hint
            </button>
          </div>

          <p className="text-3xl tracking-wide">😀 🤣 😁 🙃</p>
        </div>
      </section>
      <section className=" mt-14 w-full flex justify-center flex-wrap gap-x-[114px] gap-y-[45.9px]">
        {['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'].map((answer) => (
          <button
            key={answer}
            className="flex-[50%] w-full max-w-[480px] h-[81.55px] border border-white border-solid rounded-md hover:bg-[#03C988] hover:text-[#050019] hover:border-[#03C988] transition"
          >
            <span className=" font-normal text-white  text-3xl leading-[63px]  cursor-pointer ">
              {answer}
            </span>
          </button>
        ))}
      </section>
    </main>
  );
};

export default Main;
