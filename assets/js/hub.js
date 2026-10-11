// iSchool B2G Demo Hub - Simple Controller
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('viewerModal');
  const modalFrame = document.getElementById('modalFrame');
  const modalTitle = document.getElementById('modalTitle');
  const modalOpenExternal = document.getElementById('modalOpenExternal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const previewButtons = document.querySelectorAll('.btn-modal');

  function openPreview(url, title) {
    if (!modal || !modalFrame) return;
    modalTitle.textContent = title;
    modalFrame.src = url;
    modalOpenExternal.href = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePreview() {
    if (!modal) return;
    modal.classList.remove('active');
    modalFrame.src = 'about:blank';
    document.body.style.overflow = '';
  }

  previewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-url');
      const title = btn.getAttribute('data-title');
      openPreview(url, title);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closePreview);
  }

  // Close on Escape or click outside
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closePreview();
    }
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePreview();
      }
    });
  }
});
