import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPdf = (svgElement: HTMLDivElement) => {
  if (!svgElement) return;

  const pdf = new jsPDF('p', 'mm', 'a5');

  // Dostosowanie rozmiaru SVG przy użyciu transformacji CSS
  svgElement.style.width = '148mm';
  svgElement.style.height = '210mm';

  html2canvas(svgElement, {
    scale: 1,
    useCORS: true,
    logging: true,
    allowTaint: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png', 1.0);

    const bleed = 3;
    pdf.addImage(
      imgData,
      'SVG',
      bleed,
      bleed,
      148 - bleed * 2,
      (canvas.height / canvas.width) * (148 - bleed * 2)
    );

    pdf.setDrawColor(255, 0, 0);
    pdf.line(bleed - 2, bleed - 2, bleed - 2, 0);
    pdf.line(148 - bleed + 2, bleed - 2, 148 - bleed + 2, 0);
    pdf.line(bleed - 2, bleed - 2, 0, bleed - 2);
    pdf.line(148 - bleed + 2, bleed - 2, 148, bleed - 2);
    pdf.line(
      bleed - 2,
      (canvas.height / canvas.width) * (148 - bleed * 2) + bleed,
      0,
      (canvas.height / canvas.width) * (148 - bleed * 2) + bleed
    );
    pdf.line(
      148 - bleed + 2,
      (canvas.height / canvas.width) * (148 - bleed * 2) + bleed,
      148,
      (canvas.height / canvas.width) * (148 - bleed * 2) + bleed
    );
    pdf.line(
      bleed - 2,
      (canvas.height / canvas.width) * (148 - bleed * 2) + bleed,
      bleed - 2,
      (canvas.height / canvas.width) * (148 - bleed * 2) + 210
    );
    pdf.line(
      148 - bleed + 2,
      (canvas.height / canvas.width) * (148 - bleed * 2) + bleed,
      148 - bleed + 2,
      (canvas.height / canvas.width) * (148 - bleed * 2) + 210
    );

    pdf.save('do_druku_a5.pdf');

    // Przywracamy pierwotne rozmiary SVG
    svgElement.style.width = '';
    svgElement.style.height = '';
  });
};
