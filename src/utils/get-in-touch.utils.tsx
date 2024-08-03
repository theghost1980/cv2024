export const downloadCV = () => {
  const pdfUrl = "./assets/cv/short-cv-2024.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "saturno-mangieri-short-cv-2024.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
