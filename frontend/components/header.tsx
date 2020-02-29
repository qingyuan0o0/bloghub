import Link from 'next/link';
import { HEADER_NAVS } from '../settings';


const ICON_MAP = {
  'Twitter': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4813" width="100%" height="100%">
      <path
        d="M920.917333 260.096c-30.037333 13.312-62.293333 22.357333-96.085333 26.282667 34.474667-20.650667 61.098667-53.418667 73.557333-92.501333-32.256 19.114667-68.096 33.109333-106.154667 40.618667-30.549333-32.426667-73.898667-52.736-122.026667-52.736-92.330667 0-167.253333 74.922667-167.253333 167.253333 0 13.141333 1.536 25.941333 4.266667 38.058667-138.922667-6.997333-262.144-73.557333-344.746667-174.762667-14.336 24.746667-22.698667 53.418667-22.698667 84.138667 0 58.026667 29.525333 109.226667 74.410667 139.264-27.477333-0.853333-53.248-8.362667-75.776-20.992 0 0.682667 0 1.365333 0 2.048 0 81.066667 57.685333 148.650667 134.144 164.010667-13.994667 3.754667-28.842667 5.802667-44.032 5.802667-10.752 0-21.333333-1.024-31.402667-3.072 21.333333 66.389333 83.114667 114.858667 156.16 116.224-57.173333 44.885333-129.365333 71.509333-207.701333 71.509333-13.482667 0-26.794667-0.853333-39.936-2.389333 74.069333 47.445333 161.962667 75.093333 256.341333 75.093333 307.541333 0 475.818667-254.805333 475.818667-475.818667 0-7.168-0.170667-14.506667-0.512-21.674667C870.058667 323.072 898.389333 293.717333 920.917333 260.096z"
        p-id="4814" fill="#718096"></path>
    </svg>
  ),
  'Github': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6469" width="90%" height="90%">
      <path
        d="M513.2 64C266.4 64 66.4 263.6 66 510.4c0 192.4 123.2 363.6 306 424.4 22.4 4 29.2-9.2 29.2-21.2s0.4-40.4 0-77.6c-124.4 26.8-150-58.8-150-58.8-20-51.6-49.6-65.2-49.6-65.2-40.8-27.6 2.8-27.2 2.8-27.2 44.8 3.2 68.4 46 68.4 46 40 68.4 104.4 48.4 130 37.2 4-28.8 15.6-48.8 28.4-59.6-98.8-11.6-203.2-49.6-203.2-220.8-0.8-44.4 16-87.6 46-120-4.4-11.2-20-56.8 4.4-118.4 0 0 37.6-12 122.8 46 73.2-20 150.4-20 223.6 0C710.4 237.2 748 249.2 748 249.2c24.4 61.6 9.2 106.8 4.4 118.4 30 32.4 46.8 75.6 46 120 0 171.6-104.4 209.6-204 220.4 16 14 30.4 40.8 30.4 82.4v123.6c0 12 7.2 25.2 30 20.8 234-78 360.8-330.8 283.2-564.8-60.8-182.8-232-306.4-424.8-306z"
        p-id="6470" fill="#718096"></path>
    </svg>
  ),
  'Rss': (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2860" width="100%" height="100%">
      <path
        d="M810.666667 853.376C810.666667 500.437333 523.562667 213.333333 170.666667 213.333333v85.333334c305.834667 0 554.666667 248.832 554.666666 554.709333h85.333334z"
        p-id="2861" fill="#718096"></path>
      <path
        d="M512 853.376h85.333333C597.333333 618.069333 405.930667 426.666667 170.666667 426.666667v85.333333c188.202667 0 341.333333 153.130667 341.333333 341.376z"
        p-id="2862" fill="#718096"></path>
      <path d="M256 768m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" p-id="2863"
            fill="#718096"></path>
    </svg>
  ),
};

export default function Header() {
  return (
    <div className="mx-4 lg:mx-20 lg:my-12 lg:mb-20  flex justify-between items-center my-8">
      <Link href="/">
        <a title="Home Page" className="text-red-700 lg:text-3xl text-2xl tracking-wide font-bold">BlogHub</a>
      </Link>
      <div className="flex items-center">
        {HEADER_NAVS.map(c => (
          <Link href={c.href} key={c.name} prefetch={c.prefetch}>
            <a rel={c.rel}
               title={c.name}
               target={c.target}
               className={`ml-4 lg:ml-12 cursor-pointer ${c.className}`}
            >
              {
                ICON_MAP[c.name] ?
                  (<div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center">
                    {ICON_MAP[c.name]}
                  </div>)
                  :
                  <div className="block text-lg lg:text-2xl text-gray-600 tracking-wide">{c.name}</div>
              }
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}