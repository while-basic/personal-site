import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/while-basic',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/chriscelaya/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/christophercelaya',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/Im_Mr_Chris',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:chris@chriscelaya.xyz',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.buymeacoffee.com/chriscelaya',
    label: 'Buy Me a Coffee',
    icon: faCoffee,
  },
];

export default data;
