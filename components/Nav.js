import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const inactiveLink = "pl-1 flex gap-1 items-center py-1 rounded-l-lg";
  const activeLink = inactiveLink + " bg-white text-blue-950 ";
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className=" p-4 text-blue-50 pr-0 min-w-fit">
      <Link href={"/"} className={"flex flex-nowrap items-end gap-2 mb-6 mr-8"}>
        <svg
          width="48"
          height="48"
          viewBox="12 10 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2898 18.3562H14.3092C14.2587 18.3562 14.1837 18.4265 14.1808 18.473L13.4585 30.1476L26.9544 30.1451L26.2249 18.473C26.2221 18.4283 26.1453 18.3562 26.0965 18.3562H25.116V20.3214C25.116 20.8641 24.676 21.3041 24.1334 21.3041C23.5907 21.3041 23.1507 20.8641 23.1507 20.3214V18.3562H17.255V20.3214C17.255 20.8641 16.8151 21.3041 16.2724 21.3041C15.7297 21.3041 15.2898 20.8641 15.2898 20.3214V18.3562Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.203 11.4783C22.9151 11.4783 25.1162 13.6796 25.1162 16.3891L26.0967 16.3914C27.1832 16.3914 28.119 17.2704 28.1865 18.3508L28.9242 30.1539C28.9918 31.2361 28.1695 32.1133 27.0862 32.1133H13.3199C12.2372 32.1133 11.4144 31.2344 11.4819 30.1539L12.2196 18.3508C12.2872 17.2686 13.221 16.3914 14.3094 16.3914H15.2899C15.2899 13.6781 17.4928 11.4783 20.203 11.4783ZM23.1509 16.3915C23.1509 14.765 21.8297 13.4436 20.203 13.4436C18.5776 13.4436 17.2552 14.7642 17.2552 16.3892L23.1509 16.3915ZM15.2899 18.3566H14.3094C14.2589 18.3566 14.1839 18.4269 14.181 18.4733L13.4587 30.148L26.9546 30.1455L26.2251 18.4733C26.2223 18.4286 26.1454 18.3566 26.0967 18.3566H25.1162V20.3218C25.1162 20.8645 24.6762 21.3044 24.1335 21.3044C23.5908 21.3044 23.1509 20.8645 23.1509 20.3218V18.3566H17.2552V20.3218C17.2552 20.8645 16.8152 21.3044 16.2726 21.3044C15.7299 21.3044 15.2899 20.8645 15.2899 20.3218V18.3566Z"
            fill="white"
          />
        </svg>
        <span className="block">Bianvi Admin</span>
      </Link>
      <nav className=" flex flex-col gap-3">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={0.7}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2929 4.29289C14 4.58579 14 5.05719 14 6C14 6.94281 14 7.41421 14.2929 7.70711C14.5858 8 15.0572 8 16 8H18C18.9428 8 19.4142 8 19.7071 7.70711C20 7.41421 20 6.94281 20 6C20 5.05719 20 4.58579 19.7071 4.29289C19.4142 4 18.9428 4 18 4H16C15.0572 4 14.5858 4 14.2929 4.29289ZM4.29289 16.2929C4 16.5858 4 17.0572 4 18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H8C8.94281 20 9.41421 20 9.70711 19.7071C10 19.4142 10 18.9428 10 18C10 17.0572 10 16.5858 9.70711 16.2929C9.41421 16 8.94281 16 8 16H6C5.05719 16 4.58579 16 4.29289 16.2929ZM14 14C14 13.0572 14 12.5858 14.2929 12.2929C14.5858 12 15.0572 12 16 12H18C18.9428 12 19.4142 12 19.7071 12.2929C20 12.5858 20 13.0572 20 14V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H16C15.0572 20 14.5858 20 14.2929 19.7071C14 19.4142 14 18.9428 14 18V14ZM4.29289 4.29289C4 4.58579 4 5.05719 4 6V10C4 10.9428 4 11.4142 4.29289 11.7071C4.58579 12 5.05719 12 6 12H8C8.94281 12 9.41421 12 9.70711 11.7071C10 11.4142 10 10.9428 10 10V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4H6C5.05719 4 4.58579 4 4.29289 4.29289Z"
              fill={pathname === "/" ? "#1a57b8" : "white"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.82324 4.82324L4.82567 4.82187C4.8276 4.82086 4.83092 4.81924 4.83596 4.81717C4.85774 4.80821 4.90611 4.79291 5.00266 4.77993C5.21339 4.7516 5.50739 4.75001 6 4.75001H8C8.49261 4.75001 8.78661 4.7516 8.99734 4.77993C9.09389 4.79291 9.14225 4.80821 9.16403 4.81717C9.16908 4.81924 9.17239 4.82086 9.17433 4.82187L9.17676 4.82324L9.17814 4.82568C9.17915 4.82761 9.18077 4.83093 9.18284 4.83597C9.1918 4.85775 9.20709 4.90611 9.22008 5.00267C9.24841 5.21339 9.25 5.5074 9.25 6.00001V10C9.25 10.4926 9.24841 10.7866 9.22008 10.9973C9.20709 11.0939 9.1918 11.1423 9.18284 11.164C9.18077 11.1691 9.17915 11.1724 9.17814 11.1743L9.17676 11.1768L9.17433 11.1781C9.17239 11.1792 9.16908 11.1808 9.16403 11.1828C9.14225 11.1918 9.09389 11.2071 8.99734 11.2201C8.78661 11.2484 8.49261 11.25 8 11.25H6C5.50739 11.25 5.21339 11.2484 5.00266 11.2201C4.90611 11.2071 4.85774 11.1918 4.83596 11.1828C4.83092 11.1808 4.8276 11.1792 4.82567 11.1781L4.82324 11.1768L4.82186 11.1743C4.82085 11.1724 4.81923 11.1691 4.81716 11.164C4.8082 11.1423 4.79291 11.0939 4.77992 10.9973C4.75159 10.7866 4.75 10.4926 4.75 10V6.00001C4.75 5.5074 4.75159 5.21339 4.77992 5.00267C4.79291 4.90611 4.8082 4.85775 4.81716 4.83597C4.81923 4.83093 4.82085 4.82761 4.82186 4.82568L4.82324 4.82324ZM5.95525 3.25C5.97013 3.25001 5.98504 3.25001 6 3.25001H8C8.01496 3.25001 8.02987 3.25001 8.04475 3.25C8.47756 3.24995 8.8744 3.24991 9.19721 3.29331C9.55269 3.3411 9.92841 3.45355 10.2374 3.76257C10.5465 4.07159 10.6589 4.44732 10.7067 4.8028C10.7501 5.12561 10.7501 5.52245 10.75 5.95526C10.75 5.97014 10.75 5.98505 10.75 6.00001V10C10.75 10.015 10.75 10.0299 10.75 10.0448C10.7501 10.4776 10.7501 10.8744 10.7067 11.1972C10.6589 11.5527 10.5465 11.9284 10.2374 12.2374C9.92841 12.5465 9.55269 12.6589 9.19721 12.7067C8.87439 12.7501 8.47756 12.7501 8.04474 12.75C8.02987 12.75 8.01496 12.75 8 12.75H6C5.98504 12.75 5.97013 12.75 5.95526 12.75C5.52244 12.7501 5.1256 12.7501 4.80279 12.7067C4.44731 12.6589 4.07159 12.5465 3.76256 12.2374C3.45354 11.9284 3.34109 11.5527 3.2933 11.1972C3.2499 10.8744 3.24994 10.4776 3.25 10.0448C3.25 10.0299 3.25 10.015 3.25 10V6.00001C3.25 5.98505 3.25 5.97013 3.25 5.95526C3.24994 5.52244 3.2499 5.12561 3.2933 4.8028C3.34109 4.44732 3.45354 4.07159 3.76256 3.76257C4.07159 3.45355 4.44731 3.3411 4.80279 3.29331C5.1256 3.24991 5.52243 3.24995 5.95525 3.25ZM14.8257 4.82187L14.8232 4.82324L14.8219 4.82568C14.8209 4.82761 14.8192 4.83093 14.8172 4.83597C14.8082 4.85775 14.7929 4.90611 14.7799 5.00267C14.7516 5.21339 14.75 5.5074 14.75 6.00001C14.75 6.49261 14.7516 6.78662 14.7799 6.99734C14.7929 7.0939 14.8082 7.14226 14.8172 7.16404C14.818 7.16606 14.8194 7.1693 14.8194 7.1693C14.8204 7.17152 14.8219 7.17434 14.8219 7.17434L14.8232 7.17677L14.8257 7.17815C14.8276 7.17916 14.8309 7.18077 14.836 7.18285C14.8577 7.19181 14.9061 7.2071 15.0027 7.22008C15.2134 7.24841 15.5074 7.25001 16 7.25001H18C18.4926 7.25001 18.7866 7.24841 18.9973 7.22008C19.0939 7.2071 19.1423 7.19181 19.164 7.18285C19.1691 7.18077 19.1724 7.17916 19.1743 7.17815L19.1768 7.17677L19.1781 7.17434C19.1791 7.1724 19.1808 7.16909 19.1828 7.16404C19.1918 7.14226 19.2071 7.0939 19.2201 6.99734C19.2484 6.78662 19.25 6.49261 19.25 6.00001C19.25 5.5074 19.2484 5.21339 19.2201 5.00267C19.2071 4.90611 19.1918 4.85775 19.1828 4.83597C19.1808 4.83093 19.1791 4.82761 19.1781 4.82568L19.1768 4.82324L19.1743 4.82187C19.1724 4.82086 19.1691 4.81924 19.164 4.81717C19.1423 4.80821 19.0939 4.79291 18.9973 4.77993C18.7866 4.7516 18.4926 4.75001 18 4.75001H16C15.5074 4.75001 15.2134 4.7516 15.0027 4.77993C14.9061 4.79291 14.8577 4.80821 14.836 4.81717C14.8309 4.81924 14.8276 4.82086 14.8257 4.82187ZM15.9553 3.25H18.0447C18.4776 3.24995 18.8744 3.24991 19.1972 3.29331C19.5527 3.3411 19.9284 3.45355 20.2374 3.76257C20.5465 4.07159 20.6589 4.44732 20.7067 4.8028C20.7501 5.12561 20.7501 5.52244 20.75 5.95526V6.04475C20.7501 6.47757 20.7501 6.8744 20.7067 7.19721C20.6589 7.5527 20.5465 7.92842 20.2374 8.23744C19.9284 8.54647 19.5527 8.65891 19.1972 8.70671C18.8744 8.75011 18.4776 8.75006 18.0447 8.75001H15.9553C15.5224 8.75006 15.1256 8.75011 14.8028 8.70671C14.4473 8.65891 14.0716 8.54647 13.7626 8.23744C13.4535 7.92842 13.3411 7.5527 13.2933 7.19721C13.2499 6.8744 13.2499 6.47757 13.25 6.04475C13.25 6.02988 13.25 6.01496 13.25 6.00001C13.25 5.98505 13.25 5.97014 13.25 5.95526C13.2499 5.52245 13.2499 5.12561 13.2933 4.8028C13.3411 4.44732 13.4535 4.07159 13.7626 3.76257C14.0716 3.45355 14.4473 3.3411 14.8028 3.29331C15.1256 3.24991 15.5224 3.24995 15.9553 3.25ZM15.9553 11.25H18.0447C18.4776 11.25 18.8744 11.2499 19.1972 11.2933C19.5527 11.3411 19.9284 11.4535 20.2374 11.7626C20.5465 12.0716 20.6589 12.4473 20.7067 12.8028C20.7501 13.1256 20.7501 13.5224 20.75 13.9553V18.0448C20.7501 18.4776 20.7501 18.8744 20.7067 19.1972C20.6589 19.5527 20.5465 19.9284 20.2374 20.2374C19.9284 20.5465 19.5527 20.6589 19.1972 20.7067C18.8744 20.7501 18.4776 20.7501 18.0447 20.75H15.9553C15.5224 20.7501 15.1256 20.7501 14.8028 20.7067C14.4473 20.6589 14.0716 20.5465 13.7626 20.2374C13.4535 19.9284 13.3411 19.5527 13.2933 19.1972C13.2499 18.8744 13.2499 18.4776 13.25 18.0448L13.25 14C13.25 13.9851 13.25 13.9701 13.25 13.9553C13.2499 13.5224 13.2499 13.1256 13.2933 12.8028C13.3411 12.4473 13.4535 12.0716 13.7626 11.7626C14.0716 11.4535 14.4473 11.3411 14.8028 11.2933C15.1256 11.2499 15.5224 11.25 15.9553 11.25ZM14.8257 12.8219L14.8232 12.8232L14.8219 12.8257C14.8209 12.8276 14.8192 12.8309 14.8172 12.836C14.8082 12.8578 14.7929 12.9061 14.7799 13.0027C14.7516 13.2134 14.75 13.5074 14.75 14V18C14.75 18.4926 14.7516 18.7866 14.7799 18.9973C14.7929 19.0939 14.8082 19.1423 14.8172 19.164C14.8192 19.1691 14.8209 19.1724 14.8219 19.1743L14.8232 19.1768L14.8257 19.1781C14.8276 19.1792 14.8309 19.1808 14.836 19.1828C14.8577 19.1918 14.9061 19.2071 15.0027 19.2201C15.2134 19.2484 15.5074 19.25 16 19.25H18C18.4926 19.25 18.7866 19.2484 18.9973 19.2201C19.0939 19.2071 19.1423 19.1918 19.164 19.1828C19.1691 19.1808 19.1724 19.1792 19.1743 19.1781L19.1768 19.1768L19.1781 19.1743C19.1791 19.1724 19.1808 19.1691 19.1828 19.164C19.1918 19.1423 19.2071 19.0939 19.2201 18.9973C19.2484 18.7866 19.25 18.4926 19.25 18V14C19.25 13.5074 19.2484 13.2134 19.2201 13.0027C19.2071 12.9061 19.1918 12.8578 19.1828 12.836C19.1816 12.833 19.1805 12.8306 19.1797 12.8287L19.1781 12.8257L19.1768 12.8232L19.1743 12.8219C19.1724 12.8209 19.1691 12.8192 19.164 12.8172C19.1423 12.8082 19.0939 12.7929 18.9973 12.7799C18.7866 12.7516 18.4926 12.75 18 12.75H16C15.5074 12.75 15.2134 12.7516 15.0027 12.7799C14.9061 12.7929 14.8577 12.8082 14.836 12.8172C14.8309 12.8192 14.8276 12.8209 14.8257 12.8219ZM4.82567 16.8219L4.82324 16.8232L4.82186 16.8257C4.82085 16.8276 4.81923 16.8309 4.81716 16.836C4.8082 16.8578 4.7929 16.9061 4.77992 17.0027C4.75159 17.2134 4.75 17.5074 4.75 18C4.75 18.4926 4.75159 18.7866 4.77992 18.9973C4.7929 19.0939 4.8082 19.1423 4.81716 19.164C4.81923 19.1691 4.82085 19.1724 4.82186 19.1743L4.82324 19.1768L4.82567 19.1781C4.8276 19.1792 4.83092 19.1808 4.83596 19.1828C4.85774 19.1918 4.90611 19.2071 5.00266 19.2201C5.21339 19.2484 5.50739 19.25 6 19.25H8C8.49261 19.25 8.78661 19.2484 8.99734 19.2201C9.09389 19.2071 9.14225 19.1918 9.16403 19.1828C9.16658 19.1818 9.1704 19.1801 9.1704 19.1801L9.17433 19.1781L9.17676 19.1768L9.17814 19.1743L9.1796 19.1714C9.18049 19.1695 9.18158 19.1671 9.18284 19.164C9.1918 19.1423 9.20709 19.0939 9.22008 18.9973C9.24841 18.7866 9.25 18.4926 9.25 18C9.25 17.5074 9.24841 17.2134 9.22008 17.0027C9.20709 16.9061 9.1918 16.8578 9.18284 16.836C9.18077 16.8309 9.17915 16.8276 9.17814 16.8257L9.17676 16.8232L9.17433 16.8219C9.17239 16.8209 9.16908 16.8192 9.16403 16.8172C9.14225 16.8082 9.09389 16.7929 8.99734 16.7799C8.78661 16.7516 8.49261 16.75 8 16.75H6C5.50739 16.75 5.21339 16.7516 5.00266 16.7799C4.90611 16.7929 4.85774 16.8082 4.83596 16.8172C4.83092 16.8192 4.8276 16.8209 4.82567 16.8219ZM5.95526 15.25H8.04474C8.47756 15.25 8.87439 15.2499 9.19721 15.2933C9.55269 15.3411 9.92841 15.4535 10.2374 15.7626C10.5465 16.0716 10.6589 16.4473 10.7067 16.8028C10.7501 17.1256 10.7501 17.5224 10.75 17.9553V18.0448C10.7501 18.4776 10.7501 18.8744 10.7067 19.1972C10.6589 19.5527 10.5465 19.9284 10.2374 20.2374C9.92841 20.5465 9.55269 20.6589 9.19721 20.7067C8.87439 20.7501 8.47756 20.7501 8.04474 20.75H5.95525C5.52244 20.7501 5.1256 20.7501 4.80279 20.7067C4.44731 20.6589 4.07159 20.5465 3.76256 20.2374C3.45354 19.9284 3.34109 19.5527 3.2933 19.1972C3.2499 18.8744 3.24994 18.4776 3.25 18.0448V17.9553C3.24994 17.5224 3.2499 17.1256 3.2933 16.8028C3.34109 16.4473 3.45354 16.0716 3.76256 15.7626C4.07159 15.4535 4.44731 15.3411 4.80279 15.2933C5.1256 15.2499 5.52244 15.25 5.95526 15.25Z"
              fill={pathname === "/" ? "#1a57b8" : "white"}
            />
          </svg>
          Dashboard
        </Link>

        <Link
          href={"/products"}
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <svg
            className=" rounded-lg"
            width="46"
            height="34"
            viewBox="0 0 32 32"
            id="OBJECT"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <title />
            <path
              fill={pathname.includes("/products") ? "#1a57b8" : "white"}
              opacity={0.8}
              className="cls-1"
              d="M28,9H4a1,1,0,0,0-1,1V28a3,3,0,0,0,3,3H26a3,3,0,0,0,3-3V10A1,1,0,0,0,28,9Z"
            />
            <path fill="white" d="M20,14H12a3,3,0,0,0,0,6h8a3,3,0,0,0,0-6Z" />
            <path fill="white" d="M24,28H18a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
            <path fill="white" d="M24,25H21a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z" />
            <path
              fill={pathname.includes("/products") ? "#1a57b8" : "white"}
              d="M30,1H2A1,1,0,0,0,1,2V8a3,3,0,0,0,3,3H28a3,3,0,0,0,3-3V2A1,1,0,0,0,30,1Z"
            />
          </svg>
          Productos
        </Link>
        <Link
          href={"/categories"}
          className={
            pathname.includes("/categories") ? activeLink : inactiveLink
          }
        >
          <svg
            width="38"
            height="38"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={pathname.includes("/categories") ? "#1a57b8" : "white"}
            opacity={0.9}
          >
            <path
              fill={pathname.includes("/categories") ? "#1a57b8" : "white"}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          Categorías
        </Link>
        <Link
          href={"/orders"}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8H16M8 12H16M10 16H14M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12Z"
              stroke={pathname.includes("/orders") ? "#1a57b8" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ordenes
        </Link>

        <Link
          href={"/setting"}
          className={pathname.includes("/setting") ? activeLink : inactiveLink}
        >
          {" "}
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.71297 5.1753C8.68625 5.62451 9.84239 5.1775 10.2547 4.18801C10.901 2.63687 13.0984 2.63687 13.7447 4.18801C14.157 5.1775 15.3132 5.62451 16.2864 5.1753C17.8968 4.43205 19.5676 6.10283 18.8243 7.71321C18.3751 8.68649 18.8221 9.84263 19.8116 10.2549C21.3628 10.9012 21.3628 13.0987 19.8116 13.745C18.8221 14.1573 18.3751 15.3134 18.8243 16.2867C19.5676 17.8971 17.8968 19.5678 16.2864 18.8246C15.3132 18.3754 14.157 18.8224 13.7447 19.8119C13.0984 21.363 10.901 21.363 10.2547 19.8119C9.84239 18.8224 8.68625 18.3754 7.71297 18.8246C6.10259 19.5678 4.4318 17.8971 5.17505 16.2867C5.62426 15.3134 5.17725 14.1573 4.18776 13.745C2.63663 13.0987 2.63663 10.9012 4.18776 10.2549C5.17725 9.84263 5.62426 8.68649 5.17505 7.71321C4.4318 6.10283 6.10259 4.43205 7.71297 5.1753ZM11.9997 8.74994C10.2048 8.74994 8.7497 10.205 8.7497 11.9999C8.7497 13.7949 10.2048 15.2499 11.9997 15.2499C13.7946 15.2499 15.2497 13.7949 15.2497 11.9999C15.2497 10.205 13.7946 8.74994 11.9997 8.74994Z"
              fill={pathname.includes("/setting") ? "#1a57b8" : "white"}
            />
            <path
              d="M10.255 4.18806C9.84269 5.17755 8.68655 5.62456 7.71327 5.17535C6.10289 4.4321 4.4321 6.10289 5.17535 7.71327C5.62456 8.68655 5.17755 9.84269 4.18806 10.255C2.63693 10.9013 2.63693 13.0987 4.18806 13.745C5.17755 14.1573 5.62456 15.3135 5.17535 16.2867C4.4321 17.8971 6.10289 19.5679 7.71327 18.8246C8.68655 18.3754 9.84269 18.8224 10.255 19.8119C10.9013 21.3631 13.0987 21.3631 13.745 19.8119C14.1573 18.8224 15.3135 18.3754 16.2867 18.8246C17.8971 19.5679 19.5679 17.8971 18.8246 16.2867C18.3754 15.3135 18.8224 14.1573 19.8119 13.745C21.3631 13.0987 21.3631 10.9013 19.8119 10.255C18.8224 9.84269 18.3754 8.68655 18.8246 7.71327C19.5679 6.10289 17.8971 4.4321 16.2867 5.17535C15.3135 5.62456 14.1573 5.17755 13.745 4.18806C13.0987 2.63693 10.9013 2.63693 10.255 4.18806Z"
              stroke={pathname.includes("/setting") ? "#1a57b8" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={0.95}
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke={pathname.includes("/setting") ? "#1a57b8" : "white"}
              strokeWidth="2"
            />
          </svg>
          Configuración
        </Link>
      </nav>
    </aside>
  );
}
