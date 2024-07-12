import React from 'react';
import Image from 'next/image';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center gap-5 py-6	px-10 border-b border-gray-300">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">
        {children}
      </h1>
      <div className="w-px self-stretch bg-gray-300" />
      <div className="flex gap-3 items-center"> {/* Добавлен класс items-center для центрирования по вертикали */}
        <div className="relative rounded-full overflow-hidden" style={{ width: '44px', height: '44px' }}>
          <Image
            layout="fill"  // Заполнение родительского контейнера
            objectFit="cover" // Заполнение и обрезка изображения
            className="rounded-full" // Задаем скругление у изображения
            src="/images/avatar.png"
            alt="avatar"
          />
        </div>
        <div>
          <p className="text-base	font-semibold text-gray-900">Adam Smith</p>
          <p className="text-sm	font-light text-gray-900">adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}