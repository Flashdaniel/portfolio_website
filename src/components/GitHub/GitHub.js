import React from 'react';
import { AiFillGithub, AiOutlineEye, AiOutlineFolder, AiOutlineExport } from 'react-icons/ai';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import {
  GitHubHeaderRow,
  ProfileButton,
  ReposGrid,
  RepoCard,
  RepoTop,
  RepoName,
  RepoDescription,
  RepoTechList,
  RepoTechTag,
  RepoActions,
  RepoLink,
} from './GitHubStyles';

const githubRepositories = [
  {
    name: 'Task-manager',
    description:
      'Full-stack task management application with real-time CRUD operations, Supabase database subscriptions, and user authentication.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/Flashdaniel/Task-manager',
    demo: 'https://task-manager-supabase.netlify.app/',
  },
  {
    name: 'hng-audiophile',
    description:
      'High-performance audio equipment e-commerce storefront featuring cart state persistence, product category routing, and checkout flows.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Flashdaniel/hng-audiophile',
    demo: 'https://bespoke-wisp-2d4be3.netlify.app/',
  },
  {
    name: 'nextjs-dashboard',
    description:
      'Modern web application dashboard implementation demonstrating Next.js App Router architecture, server components, and responsive data tables.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Flashdaniel/nextjs-dashboard',
    demo: 'https://nextjs-dashboard-navy-pi-26.vercel.app',
  },
  {
    name: 'hng-Framez-social-app',
    description:
      'Mobile social interface built with React Native and Expo, featuring feed navigation, profile interaction states, and media layouts.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Mobile UI'],
    github: 'https://github.com/Flashdaniel/hng-Framez-social-app',
    demo: 'https://appetize.io/app/b_2svb6d22xz4r6jkfnhx2hecjzi',
  },
  {
    name: 'react-adopt-me-app',
    description:
      'Pet adoption discovery web application with breed and animal filtering, stateful search interfaces, and pet profile details.',
    technologies: ['React', 'JavaScript', 'Firebase', 'CSS Modules'],
    github: 'https://github.com/Flashdaniel/react-adopt-me-app',
    demo: 'https://adopt-me-3ea97.web.app/',
  },
  {
    name: 'imageBB_uploader',
    description:
      'Lightweight client-side image hosting utility that uploads images directly to the ImgBB REST API with automatic URL generation and copy actions.',
    technologies: ['JavaScript', 'REST APIs', 'HTML5', 'Modern CSS'],
    github: 'https://github.com/Flashdaniel/imageBB_uploader',
    demo: 'https://imagebb-uploader.onrender.com/',
  },
];

const GitHub = () => {
  return (
    <Section id="github" aria-label="Open Source &amp; GitHub Repositories">
      <SectionDivider divider />
      <GitHubHeaderRow>
        <div>
          <SectionTitle>Open Source &amp; GitHub</SectionTitle>
          <SectionText>
            Selected public repositories and open-source codebases demonstrating component architecture, API integration, and clean code practices.
          </SectionText>
        </div>
        <ProfileButton
          href="https://github.com/Flashdaniel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Daniel Nweze's GitHub Profile (opens in new tab)"
        >
          <AiFillGithub size="2rem" aria-hidden="true" />
          <span>View GitHub @Flashdaniel</span>
          <AiOutlineExport size="1.4rem" aria-hidden="true" />
        </ProfileButton>
      </GitHubHeaderRow>

      <ReposGrid>
        {githubRepositories.map((repo) => (
          <RepoCard key={repo.name}>
            <RepoTop>
              <AiOutlineFolder className="repo-icon" size="2rem" aria-hidden="true" />
              <RepoName title={repo.name}>{repo.name}</RepoName>
            </RepoTop>

            <RepoDescription>{repo.description}</RepoDescription>

            <RepoTechList aria-label={`Technologies used in ${repo.name}`}>
              {repo.technologies.map((tech) => (
                <RepoTechTag key={tech}>{tech}</RepoTechTag>
              ))}
            </RepoTechList>

            <RepoActions>
              <RepoLink
                href={repo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${repo.name} source code on GitHub (opens in new tab)`}
              >
                <AiFillGithub size="1.6rem" aria-hidden="true" />
                <span>Source</span>
              </RepoLink>
              {repo.demo && (
                <RepoLink
                  href={repo.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  primary
                  aria-label={`View live demo of ${repo.name} (opens in new tab)`}
                >
                  <AiOutlineEye size="1.6rem" aria-hidden="true" />
                  <span>Live Demo</span>
                </RepoLink>
              )}
            </RepoActions>
          </RepoCard>
        ))}
      </ReposGrid>
    </Section>
  );
};

export default GitHub;
