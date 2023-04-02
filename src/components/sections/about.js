import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--purple);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--purple);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--purple);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Umbraco', 'Umbraco Cloud', 'JavaScript (ES6+)', 'Python (Django)', 'React', 'C# .net Core', 'C# MVC', 'Flutter', 'Node.js', 'Vue.js', 'Nest.js', 'Firebase', 'MS SQL Server', 'PostgreSql'];
  const countries = ['South Africa 🇿🇦', 'United States 🇺🇸', 'Indonesia 🇮🇩', 'Singapore 🇸🇬', 'Belgium 🇧🇪', 'Germany 🇩🇪', 'Netherlands 🇳🇱', 'France 🇫🇷'];
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! 👋 My name is Jason and I enjoy learning new skills and solving real world problems by using
              the internet. My journey started in 2018, I solved a Petroleum companies scheduling issue by creating a
              dashboard with real time data for them to monitor deliveries of drivers. 
              This process taught me a thing or two about HTML, CSS and .NET! 👀
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working with{' '}
              <a href="https://www.grindrodbank.co.za/">a bank</a>,{' '}
              <a href="https://www.payzilch.com/how-zilch-works/">now double 🦄 start-up</a>,{' '}
              <a href="https://www.mercedes-benz.co.za/">a huge corporation</a>, and through blood sweet and tears in my early twenties I am have found purpose in {' '}
              <a href="https://dejesz.com">my own company</a>. 
              I am currently helping change performance reviews are used inside companies, by embracing Collabrotative Team Development (CTD) {' '}
              <a href="https://onloop.io">OnLoop</a> <a href="#">#perfsucks</a>{' '}.
            </p>

            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            
            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>

            <br/>

            <p>
              I have had the privilege of making some difficult decisions in my life, and going through some early heartaches to reach success.
              I've had the opportunity to work in the Cryptocurrency trading, and algorithmic trading field where I have had my fair share of character building days, 
              nonetheless I have never given up. Today my pride lies in <a href="https://dejesz.com">DEJESZ</a> which is a mixture of my failures, and successes.
              I am deeply invested into Crypto Trading, Algorithmic Trading software Development, and Property Investments.
            </p>

            <p>
              I posses both South African 🇿🇦 and Portuguese 🇵🇹 citizenship. 
              I love travelling the world, and networking with successful founders from all over the world!
              I am currently living in Singapore 🇸🇬
            </p>

            <br/>

            <p>
              My personal list of Countries visited include:
            </p>

            <ul className="skills-list">
              {countries && countries.map((country, i) => <li key={i}>{country}</li>)}
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.JPG"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
