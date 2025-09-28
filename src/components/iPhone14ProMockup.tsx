'use client';

import type { ReactNode } from 'react';

type IPhone14ProMockupProps = {
  /** 屏幕内容图片URL */
  imageUrl: string;
  /** 图片alt文本 */
  imageAlt: string;
  /** 手机尺寸 - 'normal' | 'large' */
  size?: 'normal' | 'large';
  /** 是否显示浮动标签 */
  showFloatingLabel?: boolean;
  /** 浮动标签内容 */
  floatingLabel?: ReactNode;
  /** 额外的CSS类名 */
  className?: string;
  /** 是否可点击 */
  onClick?: () => void;
};

export default function IPhone14ProMockup({
  imageUrl,
  imageAlt,
  size = 'normal',
  showFloatingLabel = false,
  floatingLabel,
  className = '',
  onClick,
}: IPhone14ProMockupProps) {
  const isLarge = size === 'large';
  const phoneHeight = isLarge ? 'h-[680px]' : 'h-[600px]';
  const phoneWidth = isLarge ? 'w-[340px]' : 'w-[300px]';

  // 根据真实iPhone 14 Pro规格计算灵动岛尺寸
  // 这里使用的是物理硬件的实际尺寸，不是软件活动区域
  const dynamicIslandWidth = isLarge ? 'w-[110px]' : 'w-[96px]';
  const dynamicIslandHeight = isLarge ? 'h-[28px]' : 'h-[25px]';
  const dynamicIslandRadius = isLarge ? 'rounded-[14px]' : 'rounded-[12px]';

  return (
    <div className={`relative ${className}`}>
      {/* iPhone 14 Pro 外框 */}
      <div
        className={`iphone-14-pro relative ${phoneHeight} ${phoneWidth} rounded-[3.5rem] border border-gray-700 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 p-2 shadow-2xl ${onClick ? 'phone-transition cursor-pointer hover:scale-105' : ''}`}
        onClick={onClick}
        onKeyDown={onClick ? e => e.key === 'Enter' && onClick() : undefined}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={onClick ? `View ${imageAlt}` : undefined}
      >
        {/* 侧边按钮组 */}
        {/* 左侧静音开关 */}
        <div className="phone-button absolute -left-1 top-16 h-6 w-1 rounded-full bg-gray-600 shadow-inner"></div>
        {/* 左侧音量键 */}
        <div className="phone-button absolute -left-1 top-28 h-14 w-1 rounded-full bg-gray-600 shadow-inner"></div>
        <div className="phone-button absolute -left-1 top-44 h-14 w-1 rounded-full bg-gray-600 shadow-inner"></div>
        {/* 右侧电源键 */}
        <div className="phone-button absolute -right-1 top-32 h-20 w-1 rounded-full bg-gray-600 shadow-inner"></div>

        {/* 内屏幕容器 */}
        <div className="relative size-full overflow-hidden rounded-[3rem] bg-black">
          {/* Dynamic Island - 基于Apple官方规格优化 */}
          <div className={`dynamic-island absolute left-1/2 top-2 z-20 ${dynamicIslandHeight} ${dynamicIslandWidth} -translate-x-1/2 ${dynamicIslandRadius} bg-black`}>
            {/* 前置摄像头和传感器 - 简化设计 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-1.5">
                {/* 前置摄像头 */}
                <div className={`${isLarge ? 'size-1.5' : 'size-1'} rounded-full bg-gray-800`}></div>
                {/* 传感器组 */}
                <div className={`${isLarge ? 'h-1 w-2' : 'h-0.5 w-1.5'} rounded-full bg-gray-800`}></div>
              </div>
            </div>
          </div>

          {/* 屏幕内容 */}
          <div className="relative size-full">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="size-full rounded-[2.7rem] object-cover"
            />

            {/* 屏幕反光效果 */}
            <div className="screen-reflection pointer-events-none absolute inset-0 rounded-[2.7rem]"></div>
          </div>

          {/* 底部Home指示器 */}
          <div className="absolute bottom-2 left-1/2 z-10 h-1 w-36 -translate-x-1/2 rounded-full bg-white/30"></div>
        </div>

        {/* 钛金属边框反光效果 */}
        <div className="pointer-events-none absolute inset-0 rounded-[3.5rem] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60"></div>
        <div className="pointer-events-none absolute inset-0 rounded-[3.5rem] bg-gradient-to-b from-white/5 via-transparent to-black/10"></div>
      </div>

      {/* 浮动标签 */}
      {showFloatingLabel && floatingLabel && (
        <div className="absolute -right-6 -top-6 animate-in">
          {floatingLabel}
        </div>
      )}

      {/* 环境反光 */}
      <div className="pointer-events-none absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-primary-500/5 via-transparent to-secondary-500/5"></div>
    </div>
  );
}
