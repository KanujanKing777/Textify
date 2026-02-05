export const handleOpenInNewTab = () => {
    
    const blogContentDiv = document.getElementById('blogcontent');
    if (!blogContentDiv) return;

    const newWindow = window.open('', '_blank');
    const contentHTML = blogContentDiv.innerHTML;

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Blog - Textify</title>
          <style>
            :root {
              --glass-bg: rgba(255,255,255,0.04);
              --glass-border: rgba(255,255,255,0.08);
              --accent: #7c3aed;
              --accent-2: #06b6d4;
              --muted: rgba(243,244,246,0.85);
            }
            html, body {
              height: 100%;
              margin: 0;
              font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
              background: radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.12), transparent 10%), radial-gradient(900px 400px at 90% 90%, rgba(6,182,212,0.08), transparent 8%), #0b1220;
              color: var(--muted);
            }
            .page {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 48px 20px;
              box-sizing: border-box;
            }
            .card {
              width: 100%;
              max-width: 880px;
              background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
              border-radius: 16px;
              padding: 28px;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              margin: 16px 0;
            }
            p {
              margin: 12px 0;
              color: rgba(230,238,252,0.95);
              line-height: 1.6;
            }
            div {
              color: rgba(230,238,252,0.95);
            }
            h1, h2, h3, h4, h5, h6 {
              color: #e6eefc;
              margin-top: 20px;
              margin-bottom: 12px;
            }
          </style>
        </head>
        <body>
          <div class="page">
            <div class="card">
              ${contentHTML}
            </div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

export const handleConvertToPDF = () => {
    const blogContentDiv = document.getElementById('blogcontent');
    if (!blogContentDiv) return;

    const newWindow = window.open('', '_blank');
    const contentHTML = blogContentDiv.innerHTML;

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Blog - Textify</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

          <script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");
  setTimeout(() => console.log("3 seconds passed!"), 5000);
  window.print();
});

</script>
          <style>
            :root {
              --glass-bg: rgba(255,255,255,0.04);
              --glass-border: rgba(255,255,255,0.08);
              --accent: #7c3aed;
              --accent-2: #06b6d4;
              --muted: rgba(243,244,246,0.85);
            }
            html, body {
              height: 100%;
              margin: 0;
              font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
              background: radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.12), transparent 10%), radial-gradient(900px 400px at 90% 90%, rgba(6,182,212,0.08), transparent 8%), #0b1220;
              color: var(--muted);
            }
            .page {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 48px 20px;
              box-sizing: border-box;
            }
            .card {
              width: 100%;
              max-width: 880px;
              background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
              border-radius: 16px;
              padding: 28px;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              margin: 16px 0;
            }
            p {
              margin: 12px 0;
              color: rgba(230,238,252,0.95);
              line-height: 1.6;
            }
            div {
              color: rgba(230,238,252,0.95);
            }
            h1, h2, h3, h4, h5, h6 {
              color: #e6eefc;
              margin-top: 20px;
              margin-bottom: 12px;
            }
          </style>
        </head>
        <body>
          <div id="page" class="page">
            <div class="card">
              ${contentHTML}
            </div>
          </div>
        </body>
      </html>
    `);
    
    newWindow.document.close();
  };