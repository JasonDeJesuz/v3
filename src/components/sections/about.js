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

  const skills = ['Umbraco', 'Umbraco Cloud', 'JavaScript (ES6+)', 'Python (Django)', 'React', 'C# .net Core' 'C# MVC', 'Flutter', 'Node.js', 'Vue.js', 'Nest.js', 'Firebase', 'MS SQL Server', 'PostgreSql'];
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
              <a href="https://www.payzilch.com/how-zilch-works/">a start-up</a> (now Double 🦄),{' '}
              <a href="https://www.mercedes-benz.co.za/">a huge corporation</a>, and I've had the opportunity to start {' '}
              <a href="http://www.lyemac.co.za/">my own tech company</a>. My
              my obsession now is to change the way CTD is used to make teams better at {' '}
              <a href="https://onloop.io">OnLoop</a>{' '}.
            </p>

            <p>
              I've also picked up some Cryptocurrency trading along the way. 🔥
            </p>

            <p>
              I posses both South African 🇿🇦 and Portuguese 🇵🇹 citizenship.
              I have had the the privilege to travel the world the past year, while working remotely.
              Recently I have been traveling in the following countries:
            </p>

            <ul className="skills-list">
              {countries && countries.map((country, i) => <li key={i}>{country}</li>)}
            </ul>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
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
