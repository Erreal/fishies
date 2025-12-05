"use client";

import Link from "next/link";
import { useState } from "react";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import Image from "next/image";

export function Header() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* ЛОГО */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-fishies.svg"
            alt="fishies.ru logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-blue-600">fishies.ru</span>
        </Link>

        {/* ДЕСКТОП МЕНЮ */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/fish" className="px-3 py-2 text-sm hover:text-blue-600">
                  Рыбки
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/plants" className="px-3 py-2 text-sm hover:text-blue-600">
                  Растения
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Инструменты</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 grid gap-2 w-60">
                  <Link href="/planner" className="block hover:text-blue-600">
                    Планировщик аквариума
                  </Link>
                  <Link href="/calculators" className="block hover:text-blue-600">
                    Калькуляторы
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/media" className="px-3 py-2 text-sm hover:text-blue-600">
                  Медиа
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/news" className="px-3 py-2 text-sm hover:text-blue-600">
                  Новости
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Поиск */}
          <div className="relative w-48">
            <Input placeholder="Поиск..." className="pr-10" />
          </div>

          {/* Аутентификация */}
          {isLogged ? (
            <Link href="/profile">
              <Avatar className="cursor-pointer">
                <AvatarImage src="/avatars/user.png" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Button variant="default" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
          )}
        </nav>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Меню</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <Link href="/fish">Рыбки</Link>
              <Link href="/plants">Растения</Link>
              <Link href="/planner">Планировщик</Link>
              <Link href="/calculators">Калькуляторы</Link>
              <Link href="/media">Медиа</Link>
              <Link href="/news">Новости</Link>

              <Input placeholder="Поиск..." className="mt-2" />

              {isLogged ? (
                <Link href="/profile" className="flex items-center gap-2 mt-4">
                  <Avatar>
                    <AvatarImage src="/avatars/user.png" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  Мой профиль
                </Link>
              ) : (
                <Button asChild className="mt-4">
                  <Link href="/signin">Sign In</Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
