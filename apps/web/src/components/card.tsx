import React from "react";
import { PiToolbox } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import IRepository from "../interfaces/repository.interface";

interface CardProps {
  repositories: IRepository[];
}

const Card: React.FC<CardProps> = ({ repositories }) => {
  return (
    <>
      {repositories.map((repo) => (
        <div key={repo.id}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-customcardbg p-2 text-white flex flex-col gap-2 mb-4"
          >
            <div className="flex items-center">
              <img
                src={repo.avatar_url}
                alt="Profile Avatar"
                className="w-6 h-6 rounded-full mr-2"
              />
              <div className="flex flex-col">
                <span className="font-bold">{repo.full_name}</span>
              </div>
            </div>
            <div className="flex flex-col text-white">
              <span>{repo.description}</span>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="flex gap-1">
                <PiToolbox className="self-center" />
                <span>{repo.language}</span>
              </div>
              <div className="flex gap-1">
                <CiCalendar className="self-center" />
                <span>
                  Updated on {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
