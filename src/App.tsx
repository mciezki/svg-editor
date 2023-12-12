import { useEffect, useState } from 'react';
import { Editable } from './assets/editable';
import { Button, Input } from '@material-tailwind/react';
import { OriginalSVG } from './components/original';
import { TransformedSVG } from './components/transformed';

export default function App() {
  const [texts, setTexts] = useState<string[]>([]);
  const [fontSizes, setFontSizes] = useState<string[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    const editableContents = document.querySelectorAll('#editable text');
    const initialTexts = Array.from(
      editableContents,
      (element) => element.textContent ?? ''
    );
    const initialFontSizes = Array.from(editableContents, (element) =>
      (element as HTMLElement).style.fontSize.replace('px', '')
    );
    setTexts(initialTexts);
    setFontSizes(initialFontSizes);
  }, []);

  const handleTextChange = (newText: string, index: number) => {
    setTexts((prevTexts) => {
      const newTexts = [...prevTexts];
      newTexts[index] = newText;
      return newTexts;
    });
  };

  const handleSizeChange = (newSize: string, index: number) => {
    setFontSizes((prevSizes) => {
      const newSizes = [...prevSizes];
      newSizes[index] = newSize;
      return newSizes;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    texts.forEach((text, index) => {
      document.querySelectorAll('#editable text')[index].textContent = text;
      (
        document.querySelectorAll('#editable text')[index] as HTMLElement
      ).style.fontSize = `${fontSizes[index]}px`;
    });

    setIsChanged(true);
  };

  return (
    <div className='min-h-screen p-12'>
      <div className='flex justify-evenly items-center mb-12'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
          <p
            className={`${
              isChanged ? 'text-green-300' : 'text-orange-400'
            } text-center font-bold text-lg`}
          >
            {isChanged ? 'Transformed SVG' : 'Original SVG'}
          </p>
          {texts?.map((text, index) => (
            <div className='flex gap-2' key={index}>
              <Input
                label={`text ${index + 1}`}
                value={text}
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
          ))}
          <Button placeholder='' type='submit'>
            Submit
          </Button>
        </form>
        <div className='w-1/2 h-1/2'>
          <Editable />
        </div>
      </div>
      <OriginalSVG />
      <TransformedSVG />
    </div>
  );
}
