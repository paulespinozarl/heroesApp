import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {
  
  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

  return (
    <div className="row rows-cols-1 g-3"> 
        { heroes.map( hero => (
            <HeroCard key={ hero.id } {...hero}/>
        ))
        }
    </div>
  )
};