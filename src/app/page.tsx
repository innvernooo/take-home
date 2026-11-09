'use client';

import { Geist } from 'next/font/google';
import { useState } from 'react';
import { GiDominoTiles } from 'react-icons/gi';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const source: number[][] = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [4, 4],
  [1, 2],
];

export default function Home() {
  const [dominoes, setDominoes] = useState(source);
  const double = dominoes.filter(([a, b]) => a === b).length;

  const sortAsc = () => {
    setDominoes([...dominoes].sort((a, b) => a[0] + a[1] - (b[0] + b[1])));
  };

  const sortDesc = () => {
    setDominoes([...dominoes].sort((a, b) => b[0] + b[1] - (a[0] + a[1])));
  };

  const flip = () => {
    setDominoes(dominoes.map(([a, b]) => [b, a]));
  };

  return (
    <>
      <div
        className={`w-full h-screen bg-white p-15 text-black ${geistSans.className}`}
      >
        <div className="flex items-center justify-center gap-2 text-3xl font-semibold">
          <h1>Dominoes</h1>
          <GiDominoTiles />
        </div>
        <div className="mt-8 w-full h-fit flex justify-center">
          <div className="w-200 h-fit">
            <h2 className="text-black">Source</h2>
            <div className="w-200 h-10 bg-white rounded-lg ring flex items-center px-3">
              <p className="line-clamp-1">{JSON.stringify(source)}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full h-fit flex justify-center">
          <div className="w-200 h-fit">
            <h2 className="text-black">Double Numbers</h2>
            <div className="w-200 h-10 bg-white rounded-lg ring flex items-center px-3">
              <p className="line-clamp-1">{double}</p>
            </div>
          </div>
        </div>
        <div className="mt-13 flex justify-between">
          {dominoes.map((d, i) => (
            <div
              key={i}
              className="w-40 h-60 bg-amber-100 p-4 grid grid-cols-1 items-center rounded-3xl ring"
            >
              <h1 className="flex justify-center text-4xl">{d[0]}</h1>
              <p className="line-clamp-1">
                _________________________________________
              </p>
              <h1 className="flex justify-center text-4xl">{d[1]}</h1>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-around">
          <button onClick={sortAsc} className="btn btn-warning">
            Ascending Sort
          </button>
          <button onClick={sortDesc} className="btn btn-warning">
            Descending Sort
          </button>
          <button
            onClick={() => setDominoes(source)}
            className="btn btn-warning"
          >
            Reset
          </button>
          <button onClick={flip} className="btn btn-warning">
            Flip
          </button>
        </div>
      </div>
    </>
  );
}
