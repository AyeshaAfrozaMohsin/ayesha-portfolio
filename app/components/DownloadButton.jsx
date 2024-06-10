"use client";

export default function DownloadButton() {
  const handleDownload = () => {
    const pdfUrl = "/Ayesha_CV.pdf"; // Adjust the path to your PDF file
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Ayesha Afroza Mohsin.pdf"); // Set the filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      onClick={handleDownload}
      className="bg-pink-400 dark:bg-pink-700 p-3 rounded-full shadow-md font-bold dark:text-gray-300"
    >
      Download CV
    </button>
  );
}
