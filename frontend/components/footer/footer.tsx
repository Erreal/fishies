import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 py-6 text-center text-sm text-gray-500 flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/Erreal" // замените на ваш гитхаб
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-gray-700 transition"
        ></a>
      </div>

      <div>
        Разработчик:{' '}
        <a href="mailto:youremail@example.com" className="hover:text-gray-700">
          webmaster@fishies.ru
        </a>
      </div>

      <div className="text-xs text-gray-400">
        © {new Date().getFullYear()} fishies.ru. All rights reserved.
      </div>
    </footer>
  );
}
