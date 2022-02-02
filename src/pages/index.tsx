import React, { useRef, useState } from 'react'
import { Meta } from '../layout/Meta'
import { AppConfig } from '../utils/AppConfig'
import Link from 'next/link'
import { Footer } from '../templates/Footer'

import { Section } from '../layout/Section'
import { Background } from '../background/Background'

import { Button } from '../button/Button'
import { HeroWithButtons } from '../hero/HeroWithButtons'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns'
import { Logo } from '../components/Logo'

import Bio from './bio'
import Portfolio from './portfolio'



const Index = () => {

  const portfolio = useRef(null)
  const bio = useRef(null)
  const scrollTo = (ref:any) =>{
    ref.current.scrollIntoView()
  }
  const professions: string[] = [
    'Web Artisan',
    'Web Developer',
    'Fullstack Developer',
    'Web Crafter',
    'Software Engineer',
    'Software Developer',
    'Web Programer',
    'Web Builder',
    'Web Engineer'
  ]
  const [profession, setProfession] = useState<number>(0);

  const randomiseProfesion = () => {
    let rand = profession;
    while(rand === profession){
      rand = Math.floor(Math.random()*professions.length);
    }
    setProfession(rand);
  }

  return (
    <Background color="bg-gray-100">
      <div className="antialiased text-gray-600">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <Button outlined>Resume</Button>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

        <Section yPadding="pt-20 pb-32">
          <HeroWithButtons
            title={
              <>
                {'Hi, my name is Darya Tarasova.\n'}
                  I am a&nbsp;
                    <span
                      className="text-primary-500 cursor-pointer" 
                      onClick={randomiseProfesion}
                    >
                      { professions[profession] }
                    </span>
                    <span 
                      className='text-secondary-500 cursor-pointer text-3xl leading-extra-loose'
                      onClick={randomiseProfesion}
                    >
                        &#8634; &nbsp; 
                    </span>
                    based in Essen,DE
                
              </>
            }
            description='Feel free to take a coffee and browse my pages!' 
            buttons={
              [<Button xl secondary onClick={()=>scrollTo(portfolio)}>Portfolio</Button>,
                <Button xl secondary onClick={()=>scrollTo(bio)}>Bio</Button>,
              ]
            }
          />
          <div ref={portfolio}><Portfolio /></div>
          <div ref={bio}><Bio/></div>
        </Section>
        
        <Footer />
      </div>
    </Background>
    
  );
}

export default Index
