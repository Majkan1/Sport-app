"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { League } from "../types";
export default function SearchWrapper({
  leagues = [],
}: {
  leagues?: League[] | null;
}) {
  const [searchValue, setSearchValue] = useState("");
  const safeLeagues = Array.isArray(leagues) ? leagues : [];
  const filtered = safeLeagues.filter((league) =>
    league.strLeague.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <SearchBar value={searchValue} onValue={setSearchValue} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <div
              className="bg-pitch-surface border border-pitch-border rounded-[14px] p-5 text-pitch-text font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:border-accent/55 hover:bg-pitch-surface2 cursor-pointer"
              key={item.idLeague}
            >
              <Link
                href={`/leagues/${item.idLeague}`}
                className="flex flex-col group"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-sm tracking-widest text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-pitch-faint">
                    {item.strSport || "Soccer"}
                  </span>
                </div>
                <span className="mt-2 font-display text-2xl uppercase transition-colors duration-200">
                  {item.strLeague}
                </span>
                <span className="mt-4 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-pitch-faint group-hover:text-accent transition-colors duration-200">
                  View teams
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-pitch-faint text-center py-12 text-lg col-span-full">
            No leagues found
          </p>
        )}
      </div>
    </div>
  );
}
