'use client';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

export default function BackToTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('back-to-top');
      if (!btn) {
        return;
      }
      if (window.scrollY > 50) {
        btn.classList.remove('opacity-0', 'invisible');
        btn.classList.add('opacity-100', 'visible');
      } else {
        btn.classList.add('opacity-0', 'invisible');
        btn.classList.remove('opacity-100', 'visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="back-to-top"
      className="invisible fixed bottom-8 right-8 z-50 flex size-12 items-center justify-center rounded-full bg-primary-500 text-white opacity-0 shadow-lg transition-all duration-300"
      onClick={handleClick}
      aria-label="Back to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
