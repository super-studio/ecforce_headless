import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold mb-4">CATEGORY</div>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Skincare
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Makeup
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Body Care
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">MEMBER</div>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Login
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Register
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                My Account
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">ABOUT</div>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">SERVICE</div>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-black">
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
