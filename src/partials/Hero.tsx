import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Arduino Learn</GradientText>
        </>
      }
      description={
        <>
          Arduino Learn adalah website blog, untuk memperlajari dasar-dasar arduino sampai ke tahap. Project{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            berfungsi
          </a>{' '}
          sebagai latihan untuk mencoba ngoding, belajar gambar skematik sama bikin prototipe alat nya.{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            berisi kan
          </a>{' '}
          menu-menu project,blog sampai social media.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://id.quora.com/profile/Farid-Ardiansyah-4">
            <HeroSocial
              src="/assets/images/quora-icon.png"
              alt="Quora icon"
            />
          </a>
          <a href="https://fardardnsyh.github.io/404part1.github.io/">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
          <a href="https://fardardnsyh.github.io/404part1.github.io/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/fardardnsyh">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
