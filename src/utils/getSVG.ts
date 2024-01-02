import plakat from '../assets/getre-svg/plakat-b2_Artboard 1.svg';
import dopisek from '../assets/getre-svg/szablon-dopisek-08.svg';
import kat1 from '../assets/getre-svg/szablon-kat-1-03.svg';
import kat2 from '../assets/getre-svg/szablon-kat-2-04.svg';
import kat3 from '../assets/getre-svg/szablon-kat-3-05.svg';
import prod1 from '../assets/getre-svg/szablon-prod-1-06.svg';
import prod2 from '../assets/getre-svg/szablon-prod-2-07.svg';
import ulotkaback from '../assets/getre-svg/ulotka-menu-back-02.svg';
import ulotkafront from '../assets/getre-svg/ulotka-menu-front-01.svg';

export const getSVG = (pathname: string) => {
  switch (pathname.replace('/svg-editor/', '')) {
    case 'plakat':
      return plakat;
    case 'dopisek':
      return dopisek;
    case 'kat1':
      return kat1;
    case 'kat2':
      return kat2;
    case 'kat3':
      return kat3;
    case 'prod1':
      return prod1;
    case 'prod2':
      return prod2;
    case 'ulotkaback':
      return ulotkaback;
    case 'ulotkafront':
      return ulotkafront;
    default:
      return '';
  }
};
