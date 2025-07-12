"use client";

import Image from "next/image";
import Link from "next/link";
import blazevortexLogo from "@/public/blazevortex.png";
import { usePathname } from "next/navigation";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function Navbar() {
  interface NavbarLinkChild {
    name: string;
    href: string;
  }

  interface NavbarLink {
    name: string,
    href: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    children?: NavbarLinkChild[],
    altLinks?: string[],
  }

  const links: NavbarLink[] = [
    {
      name: "Learn",
      href: "/user-list",
      icon: UserGroupIcon,
    }
  ];

  const pathname = usePathname();
  
  return (
    <>
      <div className="absolute top-0 flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-2 p-2 px-4 m-2 mt-4 border-2 border-white rounded-3xl bg-black/60 backdrop-blur-md">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              alt="BlazeVortex Logo"
              width={100}
              height={100}
              src={blazevortexLogo}
              className="rounded-2xl w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[3rem] h-auto"
            />
            <h3 className={clsx("px-2 text-3xl font-bold border-x-2 border-x-gray-600", pathname == "/" && "text-[#fd7a2a]")}>
              BlazeVortex
            </h3>
          </Link>
          <div className="flex flex-row justify-around">
            {links.map((link) => (
              <div
                className="relative flex flex-row justify-center h-full group"
                key={link.name}
              >
                {link.children ? (
                  <div className="relative">
                    <div
                      className={clsx(
                          "p-1 relative rounded-2xl cursor-pointer",
                        {
                          "text-[#fd7a2a]":
                            (pathname.includes(link.href) &&
                              link.href != "/") ||
                            pathname === link.href ||
                            link.altLinks?.some((altLink) =>
                              new RegExp(
                                `^${altLink.replace(/\*/g, ".*")}$`
                              ).test(pathname)
                            ),
                        }
                      )}
                    >
                      {link.icon ? (
                        <Link href={link.href}>
                          <link.icon
                            className="w-6 h-6"
                            aria-label={link.name}
                          />
                        </Link>
                      ) : (
                        <Link href={link.href}>{link.name}</Link>
                      )}
                    </div>
                    <div className="absolute w-0 h-0 border-0 left-0 min-w-[161px] overflow-hidden bg-[#ededed] dark:bg-[#121212] border-[#121212] dark:border-[#ededed] shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:border-2 group-hover:w-auto group-hover:h-auto transition-opacity duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={clsx(
                            "block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800",
                            {
                              "text-[#fd7a2a]":
                                pathname.includes(child.href) ||
                                pathname === child.href,
                            }
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        "p-1 relative rounded-2xl",
                      {
                        " text-[#fd7a2a]":
                          (pathname.includes(link.href) && link.href != "/") ||
                          pathname === link.href,
                      }
                    )}
                  >
                    {link.icon ? (
                      <link.icon className="w-6 h-6" aria-label={link.name} />
                    ) : (
                      <p>{link.name}</p>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
