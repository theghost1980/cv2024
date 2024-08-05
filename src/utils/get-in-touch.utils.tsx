const PATH_CV_ES =
  "./assets/cv/SATURNO_CV_CORTO_ES_2024_DESARROLLADOR_FRONTEND.pdf";
const PATH_CV_ENG =
  "./assets/cv/SATURNO_CV_SHORT_ENG_2024_FRONTEND_DEVELOPER.pdf";

export const downloadCV = (lang: string) => {
  const pdfUrl = lang === "en" ? PATH_CV_ENG : PATH_CV_ES;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = `saturno-mangieri-short-cv-2024(${lang}).pdf`; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
