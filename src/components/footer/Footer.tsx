import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-x1 font-bold">Farmácia Gen | Copyright © {data}</p>
          <p className="text-lg">Acesse minhas redes sociais:</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/maristela-rocha/"
              target="_blank"
            >
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://github.com/maristelarochas" target="_blank">
              <GithubLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
