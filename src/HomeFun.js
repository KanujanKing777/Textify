export const handleOpenInNewTab = ({ title, faviconHref }) => {
    const blogContentDiv = document.getElementById('blogcontent');
    if (!blogContentDiv) return;

    const newWindow = window.open('', '_blank');
    if (!newWindow) return;
    newWindow.opener = null;

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title></title>
          <link rel="icon" href="">
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
            .comic-page-thumbnail {
              display: block;
              max-width: 100%;
              margin: 0 auto;
              padding: 0;
              border: 0;
              background: transparent;
              cursor: zoom-in;
            }
            .comic-page-thumbnail img {
              display: block;
              max-width: 100%;
              max-height: 400px;
              margin: 0 auto;
              object-fit: contain;
            }
            .image-viewer {
              position: fixed;
              inset: 0;
              z-index: 10;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 56px 72px;
              box-sizing: border-box;
              background: rgba(3, 7, 18, 0.94);
            }
            .image-viewer[hidden] {
              display: none;
            }
            .image-viewer figure {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              max-width: 100%;
              max-height: calc(100vh - 112px);
              margin: 0;
            }
            .image-viewer figure img {
              display: block;
              width: auto;
              max-width: min(100%, calc(100vw - 144px), 1200px);
              max-height: calc(100vh - 160px);
              margin: 0;
              object-fit: contain;
              box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
            }
            .image-viewer figcaption {
              color: #fff;
              text-align: center;
            }
            .image-viewer button {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 48px;
              height: 48px;
              padding: 0;
              border: 1px solid rgba(255,255,255,0.2);
              border-radius: 50%;
              background: rgba(15, 23, 42, 0.85);
              color: white;
              font-size: 24px;
              cursor: pointer;
            }
            .image-viewer-close {
              top: 20px;
              right: 20px;
            }
            .image-viewer-previous {
              left: 20px;
            }
            .image-viewer-next {
              right: 20px;
            }
            @media (max-width: 600px) {
              .image-viewer {
                padding: 56px 48px;
              }
              .image-viewer figure img {
                max-width: calc(100vw - 96px);
                max-height: calc(100vh - 144px);
              }
              .image-viewer-previous {
                left: 6px;
              }
              .image-viewer-next {
                right: 6px;
              }
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
              <div class="card"></div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.document.title = title;
    newWindow.document.querySelector('link[rel="icon"]').href = faviconHref;

    const newDocument = newWindow.document;
    newDocument.querySelector('.card').append(newDocument.importNode(blogContentDiv, true));
    const thumbnails = Array.from(newDocument.querySelectorAll('.comic-page-thumbnail img'));
    if (thumbnails.length === 0) return newWindow;

    const viewer = newDocument.createElement('div');
    viewer.className = 'image-viewer';
    viewer.hidden = true;
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-modal', 'true');
    viewer.innerHTML = `
      <button type="button" class="image-viewer-close" aria-label="Close enlarged image">&times;</button>
      <button type="button" class="image-viewer-previous" aria-label="Previous image">&lsaquo;</button>
      <figure><img alt=""><figcaption></figcaption></figure>
      <button type="button" class="image-viewer-next" aria-label="Next image">&rsaquo;</button>
    `;
    newDocument.body.appendChild(viewer);

    const viewerImage = viewer.querySelector('img');
    const viewerCaption = viewer.querySelector('figcaption');
    const closeButton = viewer.querySelector('.image-viewer-close');
    let activeIndex = 0;

    const showImage = (index) => {
      activeIndex = (index + thumbnails.length) % thumbnails.length;
      const thumbnail = thumbnails[activeIndex];
      viewerImage.src = thumbnail.src;
      viewerImage.alt = thumbnail.alt;
      viewerCaption.textContent = thumbnail.alt
        || thumbnail.closest('div')?.querySelector('p')?.textContent
        || `Image ${activeIndex + 1}`;
      viewer.hidden = false;
      closeButton.focus();
      newDocument.body.style.overflow = 'hidden';
    };

    const closeViewer = () => {
      viewer.hidden = true;
      newDocument.body.style.overflow = '';
    };

    newDocument.addEventListener('click', (event) => {
      const thumbnail = event.target.closest('.comic-page-thumbnail');
      if (thumbnail) {
        event.preventDefault();
        const index = thumbnails.indexOf(thumbnail.querySelector('img'));
        if (index >= 0) showImage(index);
      } else if (event.target === viewer) {
        closeViewer();
      }
    });
    closeButton.addEventListener('click', closeViewer);
    viewer.querySelector('.image-viewer-previous').addEventListener('click', () => {
      showImage(activeIndex - 1);
    });
    viewer.querySelector('.image-viewer-next').addEventListener('click', () => {
      showImage(activeIndex + 1);
    });
    newDocument.addEventListener('keydown', (event) => {
      if (viewer.hidden) return;
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
      if (event.key === 'ArrowRight') showImage(activeIndex + 1);
    });
    return newWindow;
  };

export const handleConvertToPDF = async () => {
  const preview = handleOpenInNewTab({ title: 'Blog - Textify', faviconHref: '/favicon.png' });
  if (!preview) return;

  const images = [...preview.document.querySelectorAll('.card img')];
  await Promise.allSettled(images.map((image) => image.decode()));
  if (!preview.closed) preview.print();
};
