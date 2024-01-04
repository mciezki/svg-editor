import { useEffect, useState } from 'react';
import { CodeBlock } from 'react-code-blocks';
import { useLocation } from 'react-router-dom';

export function SourceSVG({ codeAddress }: { codeAddress: string }) {
  const [code, setCode] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const getSnippet = async () => {
      try {
        const response = await fetch(codeAddress);
        setCode(await response.text());
      } catch {
        setCode('Błąd pobierania svg');
      }
    };

    getSnippet();
  }, [codeAddress]);

  return (
    <div>
      <p
        className='cursor-pointer font-bold text-white text-xl select-none'
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {isOpen ? '-' : '+'} Source Code
      </p>
      {isOpen && (
        <CodeBlock language='javascript' showLineNumbers text={code} />
      )}
    </div>
  );
}
