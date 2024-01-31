import { useRef, useEffect, useState } from 'react';
import { Select, Option, Button } from '@material-tailwind/react';
import { SourceSVG } from '../components/source-code';
import menu from '../assets/categories/categories.svg';
import { MenuCategory, menuCategories } from '../utils/consts/menu-objects';
import {
  CategoryObject,
  groupElementsByCategory,
} from '../utils/group-elements-by-category';
import { CodeBlock } from 'react-code-blocks';
import { exportToPdf } from '../utils/exportToPdf';

export default function CategoryPage() {
  const svgRef = useRef(null);

  const [groupSelectors, setGroupSelectors] = useState<
    Record<string, CategoryObject>
  >({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(menu);
        const svgContent = await response.text();

        if (svgRef.current) {
          (svgRef.current as SVGElement).innerHTML = svgContent;
          updateEditableContents();
        }
      } catch (error) {
        console.error('Błąd ładowania pliku SVG:', error);
      }
    };

    const updateEditableContents = () => {
      const categories = (
        svgRef.current as unknown as SVGElement
      ).querySelectorAll('g[id^="kat"]');

      const sizes = (svgRef.current as unknown as SVGElement).querySelectorAll(
        'g[id^="rozmiar"][id*="_kat"]'
      );

      const names = (svgRef.current as unknown as SVGElement).querySelectorAll(
        'g[id^="naz"][id*="_kat"]'
      );

      const prices = (svgRef.current as unknown as SVGElement).querySelectorAll(
        'g[id^="cena"][id*="_naz"][id*="_kat"]'
      );

      const descriptions = (
        svgRef.current as unknown as SVGElement
      ).querySelectorAll('g[id^="opis"][id*="_naz"][id*="_kat"]');

      const groupedObjects = groupElementsByCategory(
        categories,
        sizes,
        names,
        prices,
        descriptions
      );

      setGroupSelectors(groupedObjects);
    };
    fetchData();
  }, []);

  const handleChange = (category: MenuCategory, categoryName: string) => {
    const currentlyEditedCategory = Object.values(groupSelectors).find(
      (selector) => selector.id === categoryName
    );

    if (currentlyEditedCategory) {
      const editedCategoryValues = Object.entries(currentlyEditedCategory);

      editedCategoryValues.forEach((value) => {
        if (value[0] === 'id') {
          (
            document.querySelector(`#${value[1]} text`) as SVGTextElement
          ).textContent = category.categoryName ?? '';
        }

        if (value[0] === 'sizes') {
          value[1].forEach(
            (size: string, index: number) =>
              ((
                document.querySelector(`#${size} text`) as SVGTextElement
              ).textContent = Object.values(category.sizes)[index] ?? '')
          );
        }

        if (value[0] === 'names') {
          for (
            let index = 0;
            index < currentlyEditedCategory.names.length;
            index++
          ) {
            (
              document.querySelector(
                `#${value[1][index]} text`
              ) as SVGTextElement
            ).textContent = category.meal[index]?.name ?? '';
          }
        }

        if (value[0] === 'descriptions') {
          for (
            let index = 0;
            index < currentlyEditedCategory.descriptions.length;
            index++
          ) {
            (
              document.querySelector(
                `#${value[1][index]} text`
              ) as SVGTextElement
            ).textContent = category.meal[index]?.description ?? '';
          }
        }

        if (value[0] === 'prices') {
          for (
            let index = 0;
            index < currentlyEditedCategory.names.length;
            index++
          ) {
            for (
              let priceIndex = 0;
              priceIndex <
              currentlyEditedCategory.prices.length /
                currentlyEditedCategory.names.length;
              priceIndex++
            ) {
              const arrayIndex =
                priceIndex +
                index *
                  (currentlyEditedCategory.prices.length /
                    currentlyEditedCategory.names.length);
              (
                document.querySelector(
                  `#${value[1][arrayIndex]} text`
                ) as SVGTextElement
              ).textContent = Object.values(category?.meal[index]?.prices ?? {})
                .length
                ? Object.values(category?.meal[index]?.prices)[priceIndex]
                : '';
            }
          }
        }
      });
    }
  };

  return (
    <div className='min-h-screen p-12'>
      <div className='flex justify-evenly items-start mb-12'>
        <div className='flex flex-col  gap-4'>
          {Object.values(groupSelectors)
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((selector, index) => (
              <Select
                onChange={(value) =>
                  value ? handleChange(JSON.parse(value), selector.id) : null
                }
                label={`Grupa ${index + 1}`}
                key={index}
                placeholder=''
              >
                {menuCategories.map((category, index) => (
                  <Option value={JSON.stringify(category)} key={index}>
                    Kategoria {index + 1}
                  </Option>
                ))}
              </Select>
            ))}
          <Button
            onClick={() =>
              exportToPdf(svgRef.current as unknown as HTMLDivElement)
            }
            placeholder=''
          >
            Pobierz w PDF
          </Button>
        </div>
        <div className='w-1/2 h-1/2'>
          <div ref={svgRef}></div>
        </div>
      </div>
      <div>
        <p>Objekt z którego są wyciągane dane (można też bez tablicy):</p>
        <CodeBlock language='javascript' showLineNumbers text={dataObject} />
      </div>
      <SourceSVG codeAddress={menu} />
    </div>
  );
}

const dataObject = `[
  {
    categoryName: 'Pizza',
    sizes: {
      w1: '20cm',
      w2: '30cm',
      w3: '40cm',
    },
    meal: [
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
    ],
  },
  {
    categoryName: 'Pizza Mniam',
    sizes: {
      w1: '30cm',
      w2: '40cm',
      w3: '50cm',
    },
    meal: [
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
    ],
  },
  {
    categoryName: 'Burgerki',
    sizes: {
      w1: '',
      w2: '',
      w3: '',
    },
    meal: [
      {
        name: 'Cheeseburger',
        description: 'serowy burger',
        prices: { c1: ' ', c2: ' ', c3: '30zl' },
      },
      {
        name: 'Hamburger',
        description: 'szynka burger',
        prices: { c1: ' ', c2: ' ', c3: '40zl' },
      },
      {
        name: 'Vegeburger',
        description: 'sałata burger',
        prices: { c1: ' ', c2: ' ', c3: '50zl' },
      },
    ],
  },
  {
    categoryName: '',
    sizes: {
      w1: '',
      w2: '',
      w3: '',
    },
    meal: [
      {
        name: '',
        description: '',
        prices: { c1: '', c2: '', c3: '' },
      },
      {
        name: '',
        description: '',
        prices: { c1: '', c2: '', c3: '' },
      },
      {
        name: '',
        description: '',
        prices: { c1: '', c2: '', c3: '' },
      },
    ],
  },
];`;
