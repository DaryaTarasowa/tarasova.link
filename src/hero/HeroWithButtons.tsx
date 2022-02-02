import { ReactNode } from 'react';

type IHeroWithButtonsProps = {
  title: ReactNode;
  description: ReactNode;
  buttons: ReactNode[];
};

const HeroWithButtons = (props: IHeroWithButtonsProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 font-mono">{props.description}</div>
    <div className="flex justify-center">
      { props.buttons.map((button: ReactNode, index:number) => { return <div key={`heroButton${index}`} className="mr-5 ml-5">{button}</div> }) }
    </div>
    
  </header>
);

export { HeroWithButtons };
