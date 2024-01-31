import React, { useRef, useEffect, useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useLocation } from 'react-router-dom';
import { getSVG } from '../utils/getSVG';
import { SourceSVG } from '../components/source-code';
import { exportToPdf } from '../utils/exportToPdf';

const GetrePage = () => {
  const location = useLocation();
  const { pathname } = location;
  const svgRef = useRef(null);

  const [texts, setTexts] = useState<string[][]>([]);
  const [fontSizes, setFontSizes] = useState<string[][]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    setTexts([]);
    setFontSizes([]);
    setIsChanged(false);
    const fetchData = async () => {
      try {
        const response = await fetch(getSVG(pathname));
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
      const editableContents = (
        svgRef.current as unknown as SVGElement
      ).querySelectorAll('text');

      if (editableContents) {
        const initialTexts: string[][] = [];
        const initialFontSizes: string[][] = [];

        editableContents.forEach((element) => {
          const textContent = getTextContent(element as SVGTextElement);
          if (textContent.length > 0) {
            initialTexts.push(textContent);
            initialFontSizes.push(getFontSizes(element as SVGTextElement));
          }
        });

        setTexts(initialTexts);
        setFontSizes(initialFontSizes);
      }
    };

    const getTextContent = (textElement: SVGTextElement): string[] => {
      const tspans = Array.from(
        textElement.querySelectorAll('tspan'),
        (tspan) => tspan.textContent?.trim() ?? ''
      );

      return tspans.length > 0
        ? tspans.map((span) => (span.trim() === '' ? 'to_remove' : span))
        : [textElement.textContent?.trim() ?? ''];
    };

    const getFontSizes = (textElement: SVGTextElement): string[] => {
      const tspans = Array.from(
        textElement.querySelectorAll('tspan'),
        (tspan) => tspan.style.fontSize.replace('px', '') ?? ''
      );

      return tspans.length > 0
        ? tspans
        : [textElement.style.fontSize.replace('px', '') ?? ''];
    };

    fetchData();
  }, [pathname]);

  const handleTextChange = (
    newText: string,
    index: number,
    tspanIndex?: number
  ) => {
    setTexts((prevTexts) => {
      const newTexts = [...prevTexts];

      if (typeof tspanIndex === 'number') {
        const originalTexts = newTexts[index] || [];

        if (Array.isArray(originalTexts)) {
          originalTexts[tspanIndex] = newText;
          newTexts[index] = originalTexts;
        } else {
          newTexts[index] = [originalTexts];
          newTexts[index][tspanIndex] = newText;
        }
      } else {
        newTexts[index] = [newText];
      }

      return newTexts;
    });
  };

  const handleSizeChange = (
    newSize: string,
    index: number,
    tspanIndex?: number
  ) => {
    setFontSizes((prevSizes) => {
      const newSizes = [...prevSizes];

      if (typeof tspanIndex === 'number') {
        const originalSizes = newSizes[index] || [];

        if (Array.isArray(originalSizes)) {
          originalSizes[tspanIndex] = newSize;
          newSizes[index] = originalSizes;
        } else {
          newSizes[index] = [originalSizes];
          newSizes[index][tspanIndex] = newSize;
        }
      } else {
        newSizes[index] = [newSize];
      }

      return newSizes;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    texts.forEach((textArray, index) => {
      const textElement = document.querySelectorAll('text')[
        index
      ] as SVGTextElement;

      if (textArray.length > 1) {
        const tspans = textElement.querySelectorAll('tspan');
        tspans.forEach((tspan, tspanIndex) => {
          if (textArray[tspanIndex] !== 'to_remove') {
            tspan.textContent = textArray[tspanIndex] || '';
          } else {
            tspan.textContent = '';
          }

          tspan.setAttribute(
            'style',
            `font-size:${fontSizes[index][tspanIndex]}px`
          );
        });
      } else {
        textElement.textContent = textArray[0];
        textElement.setAttribute('style', `font-size:${fontSizes[index]}`);
      }
    });

    setIsChanged(true);
  };

  return (
    <div className='min-h-screen p-12'>
      <div className='flex justify-evenly items-start mb-12'>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='flex flex-col  gap-4'
        >
          <p
            className={`${
              isChanged ? 'text-green-300' : 'text-orange-400'
            } text-center font-bold text-lg`}
          >
            {isChanged ? 'Transformed SVG' : 'Original SVG'}
          </p>
          {texts?.map((textArray, index) => (
            <div className='flex flex-col gap-2' key={index}>
              {textArray.length > 1 ? (
                textArray.map((tspanText, tspanIndex) => (
                  <div
                    key={tspanIndex}
                    className={`${
                      tspanText === 'to_remove' && 'hidden'
                    } flex gap-2`}
                  >
                    <Input
                      label={`text ${tspanIndex + 1}`}
                      value={tspanText}
                      color='white'
                      onChange={(e) =>
                        handleTextChange(e.target.value, index, tspanIndex)
                      }
                      type='form'
                      crossOrigin=''
                    />
                    <Input
                      label={`font size ${tspanIndex + 1}`}
                      value={fontSizes[index][tspanIndex]}
                      color='white'
                      onChange={(e) =>
                        handleSizeChange(e.target.value, index, tspanIndex)
                      }
                      type='number'
                      crossOrigin=''
                    />
                  </div>
                ))
              ) : (
                <div className='flex gap-2'>
                  <Input
                    label={`editable ${index + 1}`}
                    value={textArray}
                    color='white'
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    type='form'
                    crossOrigin=''
                  />
                  <Input
                    label={`font size ${index + 1}`}
                    value={fontSizes[index]}
                    color='white'
                    onChange={(e) => handleSizeChange(e.target.value, index)}
                    type='number'
                    crossOrigin=''
                  />
                </div>
              )}
            </div>
          ))}
          <Button placeholder='' type='submit'>
            Submit
          </Button>
          <Button
            onClick={() =>
              exportToPdf(svgRef.current as unknown as HTMLDivElement)
            }
            placeholder=''
          >
            Pobierz w PDF
          </Button>
        </form>
        <div className='w-1/2 h-1/2'>
          <div ref={svgRef}></div>
        </div>
      </div>
      <SourceSVG codeAddress={getSVG(pathname)} />
    </div>
  );
};

export default GetrePage;
