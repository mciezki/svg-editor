import ExamplePage from '../pages/example-page';
import GetrePage from '../pages/getre-page';

export const routes = [
  {
    route: `/svg-editor/`,
    title: 'Start',
    component: ExamplePage,
    index: true,
  },
  {
    route: `plakat`,
    title: 'Plakat B2',
    component: GetrePage,
    index: false,
  },
  {
    route: `dopisek`,
    title: 'Dopisek',
    component: GetrePage,
    index: false,
  },
  {
    route: `kat1`,
    title: 'Kat 1',
    component: GetrePage,
    index: false,
  },
  {
    route: `kat2`,
    title: 'Kat 2',
    component: GetrePage,
    index: false,
  },
  {
    route: `kat3`,
    title: 'Kat 3',
    component: GetrePage,
    index: false,
  },
  {
    route: `prod1`,
    title: 'Prod 1',
    component: GetrePage,
    index: false,
  },
  {
    route: `prod2`,
    title: 'Prod 2',
    component: GetrePage,
    index: false,
  },
  {
    route: `ulotkaback`,
    title: 'Ulotka Back',
    component: GetrePage,
    index: false,
  },
  {
    route: `ulotkafront`,
    title: 'Ulotka Front',
    component: GetrePage,
    index: false,
  },
];
