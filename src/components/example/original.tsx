import { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

export function OriginalSVG() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p
        className='cursor-pointer font-bold text-white text-xl select-none'
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {isOpen ? '-' : '+'} Original SVG
      </p>
      {isOpen && (
        <CodeBlock language='javascript' showLineNumbers text={snippet} />
      )}
    </div>
  );
}

const snippet = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 800 600" style="enable-background:new 0 0 800 600;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
	.st1{fill:#951B81;}
	.st2{fill:#009FE3;}
	.st3{fill:#662483;}
	.st4{opacity:0.63;fill:#662483;}
	.st5{font-family:'MyriadPro-Regular';}
	.st6{font-size:27px;}
	.st7{font-family:'MyriadPro-Bold';}
	.st8{font-size:167px;}
	.st9{font-family:'MyriadPro-Semibold';}
	.st10{font-size:80.6585px;}
	.st11{letter-spacing:40;}
</style>
<g id="tło">
	<rect class="st0" width="800" height="600"/>
	<rect x="494.2" y="409.9" class="st1" width="100" height="49.6"/>
	<g>
		<g>
			<path class="st2" d="M245.8,194.6c19.1-11.8,31.1-31.1,43.6-49.2c6.5-9.3,13.2-18.5,21.5-26.3c8.7-8.3,18.9-14.9,29.9-19.9
				c23.7-10.8,50.2-13.7,75.9-11.6c26.8,2.2,53.6,9.2,78.8,18.4c21.2,7.8,42,18.1,59.3,32.9c8.5,7.3,16.1,15.6,22.1,25.1
				c7,11,11.4,23.2,15.5,35.5c4.2,12.6,8.4,25.1,14.2,37c5.8,12,12.5,23.5,19.4,34.9c13.2,22,27.2,44,34.9,68.7
				c7,22.6,9.5,48,0.3,70.4c-9,22-28.9,36.6-50.3,45.3c-23.7,9.6-49.9,11.2-73.4,21.5c-23.6,10.4-39.8,31.2-60,46.4
				c-19.7,14.9-42.9,26.1-67.6,29.2c-12.3,1.5-26.9,2.2-37.9-4.5c-9.2-5.5-14.5-15.4-19.7-24.4c-5.7-9.9-11.8-19.1-20.7-26.3
				c-8.9-7.2-19.1-12.4-29.8-16.3c-24.6-9-51.1-10.2-76.4-16.5c-12.6-3.1-26.4-7.2-36.3-15.8c-8.1-7-12.4-17-13.1-27.5
				c-0.7-11,1.9-22.1,6.3-32.1c4.8-10.8,12.1-20.3,19.7-29.3c8.2-9.7,16.9-18.9,24.5-29.1c7.5-9.9,13.5-20.7,17.4-32.5
				c3.8-11.7,5.6-24.2,5.2-36.5c-0.4-12.7-3.3-24.7-7.7-36.5c-3.5-9.4-9.2-22.7-2-31.8c2-2.5-1.5-6.1-3.5-3.5
				c-7.8,9.8-4.5,22.3-0.6,33.1c2.1,5.8,4.4,11.5,5.9,17.5c1.6,6.4,2.6,13,2.9,19.6c0.6,12.7-1.2,25.4-5.2,37.5
				c-4.2,12.4-11,23.6-19.1,33.8c-15.3,19.2-34.5,36.2-43.6,59.6c-7.7,19.9-8.3,45.3,8.8,60.7c9.8,8.9,23.2,13.4,35.8,16.8
				c13.4,3.6,27.2,5.6,40.9,7.9c23.9,4.1,49.5,9.6,68.3,26c8.8,7.7,14.3,17.4,20.1,27.3c5.5,9.4,11.9,19.1,22,24
				c11.5,5.5,25.4,5.2,37.8,3.7c12.7-1.6,25-5.1,36.7-10.2c11.6-5,22.6-11.6,32.8-19.2c10.4-7.8,19.8-16.9,29.5-25.5
				c9.9-8.9,20.5-17,32.9-22.1c12.5-5.1,25.8-7.8,38.9-10.8c23.3-5.4,46.7-13.4,64.9-29.5c18.3-16.3,26.9-39.6,26.6-63.9
				c-0.4-25.4-9.2-49.7-20.9-71.9c-12.6-23.8-28.1-45.9-39.9-70.1c-6-12.3-10.3-25.2-14.6-38.2c-4.2-12.6-8.9-25.1-16.2-36.2
				c-12.6-19.1-30.8-33.6-50.7-44.4c-21.4-11.7-44.9-19.6-68.4-25.6c-27.8-7-56.9-10.8-85.5-6.5c-24.4,3.7-48.3,13.4-66.6,30.2
				c-17.1,15.5-27.7,36.4-42,54.3c-6.8,8.5-14.5,16.3-23.7,22C240.5,191.9,243,196.3,245.8,194.6L245.8,194.6z"/>
		</g>
	</g>
	<rect x="130.5" y="131.4" class="st3" width="138.5" height="107.4"/>
	
		<rect x="206.8" y="185.1" transform="matrix(0.9595 0.2816 -0.2816 0.9595 94.0305 -77.8408)" class="st4" width="222.2" height="206.3"/>
</g>
<g id="editable">
	<text transform="matrix(1 0 0 1 249.5171 56.5928)" class="st5 st6">Kwadraty i prostokąty</text>
</g>
<g id="editable">
	<text transform="matrix(0.8505 0.526 -0.526 0.8505 555.223 280.3908)" class="st7 st8">k</text>
</g>
<g id="editable">
	<text transform="matrix(6.123234e-17 -1 1 6.123234e-17 73.5995 585.6714)" class="st9 st10 st11">linia</text>
</g>
</svg>
`;
