const branches = [
  { d: 'M300 485 C301 418 296 352 296 285 C295 248 291 226 286 207', width: 31, delay: '.18s' },
  { d: 'M296 323 C267 281 237 251 184 230 C161 220 144 205 134 185', width: 18, delay: '.52s' },
  { d: 'M296 289 C328 250 360 222 420 206 C440 201 454 187 464 167', width: 17, delay: '.64s' },
  { d: 'M295 255 C271 217 248 187 223 159', width: 13, delay: '.72s' },
  { d: 'M295 248 C315 203 344 170 374 145', width: 13, delay: '.78s' },
  { d: 'M261 276 C235 275 206 281 170 303', width: 10, delay: '.82s' },
  { d: 'M337 263 C365 269 393 283 422 305', width: 10, delay: '.88s' },
];

const twigs = [
  { d: 'M186 230 C160 235 140 244 121 260', width: 5, delay: '.82s' },
  { d: 'M164 213 C143 192 129 177 119 155', width: 4, delay: '.86s' },
  { d: 'M210 240 C197 216 190 192 193 169', width: 4, delay: '.9s' },
  { d: 'M227 165 C211 144 207 120 208 101', width: 4, delay: '.92s' },
  { d: 'M257 202 C248 178 249 151 258 128', width: 4, delay: '.94s' },
  { d: 'M289 207 C281 179 282 143 287 112', width: 5, delay: '.98s' },
  { d: 'M323 201 C326 168 335 138 350 111', width: 5, delay: '1s' },
  { d: 'M374 146 C391 125 405 111 423 101', width: 4, delay: '1.02s' },
  { d: 'M411 209 C431 217 449 234 465 253', width: 5, delay: '1.04s' },
  { d: 'M443 187 C463 174 478 158 485 137', width: 4, delay: '1.06s' },
  { d: 'M365 277 C384 267 408 263 437 267', width: 4, delay: '1.08s' },
  { d: 'M225 287 C203 298 190 313 183 331', width: 4, delay: '1.1s' },
];

const roots = [
  { d: 'M298 473 C282 495 257 506 214 510', delay: '.06s' },
  { d: 'M304 474 C325 500 353 507 395 511', delay: '.14s' },
  { d: 'M300 477 C292 502 291 517 284 530', delay: '.22s' },
];

const crownShapes = [
  'M-78 19 C-89 7 -82 -16 -63 -25 C-70 -48 -47 -74 -19 -65 C-6 -80 22 -77 39 -55 C64 -56 83 -37 75 -13 C92 3 83 29 63 37 C52 60 23 62 5 49 C-19 65 -49 57 -56 42 C-72 43 -82 34 -78 19Z',
  'M-80 16 C-89 -7 -73 -31 -52 -32 C-55 -61 -26 -76 -5 -64 C16 -79 39 -66 46 -46 C73 -51 90 -30 77 -7 C91 17 77 40 56 40 C48 62 16 65 -1 51 C-28 64 -52 54 -60 37 C-79 39 -87 29 -80 16Z',
  'M-77 21 C-94 4 -79 -21 -58 -26 C-60 -53 -35 -72 -11 -63 C5 -83 34 -76 47 -51 C71 -54 88 -36 78 -15 C94 2 84 29 63 36 C59 59 28 64 10 50 C-14 66 -43 57 -51 41 C-69 45 -82 35 -77 21Z',
  'M-82 13 C-88 -9 -69 -34 -48 -30 C-50 -58 -21 -75 3 -63 C21 -78 46 -62 46 -43 C74 -45 89 -26 75 -3 C90 17 71 43 49 42 C37 63 10 61 -7 49 C-34 62 -55 50 -58 34 C-78 38 -88 26 -82 13Z',
];

const crowns = [
  { x: 165, y: 206, scale: 1.02, rotation: -4, color: '#345c40', delay: '1.02s' },
  { x: 234, y: 146, scale: .93, rotation: 5, color: '#426b49', delay: '1.10s' },
  { x: 316, y: 122, scale: 1.02, rotation: -2, color: '#315a3d', delay: '1.17s' },
  { x: 399, y: 156, scale: 1.01, rotation: 4, color: '#4b7650', delay: '1.24s' },
  { x: 458, y: 226, scale: .9, rotation: -5, color: '#355e40', delay: '1.31s' },
  { x: 388, y: 250, scale: .94, rotation: 6, color: '#3b6745', delay: '1.38s' },
  { x: 289, y: 237, scale: 1.12, rotation: -3, color: '#547d52', delay: '1.45s' },
  { x: 203, y: 274, scale: .85, rotation: 3, color: '#456f48', delay: '1.52s' },
];

function canopyLeaves(clusterIndex) {
  return Array.from({ length: 24 }, (_, index) => {
    const angle = index * 2.39996 + clusterIndex * .72;
    const radius = Math.sqrt((index + .5) / 24) * 59;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * .75;
    const rotation = (angle * 180 / Math.PI + 42) % 180;
    const size = .62 + ((index * 7 + clusterIndex * 3) % 6) * .11;
    const lobed = index % 4 === 0;

    return (
      <g
        key={index}
        transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rotation.toFixed(1)}) scale(${size})`}
        opacity={index % 4 === 0 ? '.86' : '.62'}
      >
        <path
          d={lobed
            ? 'M0 -10 C3 -9 5 -7 5 -5 C9 -5 9 -2 6 0 C9 2 8 5 4 5 C4 8 2 10 0 11 C-2 9 -4 8 -4 5 C-8 5 -9 2 -6 0 C-9 -2 -9 -5 -5 -5 C-5 -7 -3 -9 0 -10Z'
            : index % 2 === 0
              ? 'M0 -8 C7 -7 10 -2 6 4 C2 9 -5 9 -8 3 C-10 -3 -5 -7 0 -8Z'
              : 'M-1 -8 C6 -8 9 -3 7 3 C4 9 -4 10 -8 4 C-10 -1 -6 -7 -1 -8Z'}
          fill={index % 3 === 0 ? '#a8c38a' : index % 3 === 1 ? '#83a975' : '#6e9968'}
        />
        {lobed && <path d="M0 -7 Q1 0 0 8" fill="none" stroke="#557a55" strokeWidth=".8" />}
      </g>
    );
  });
}

export default function OakTree() {
  return (
    <svg className="hero__tree" viewBox="0 0 600 580" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
      <defs>
        <linearGradient id="oak-bark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#62402e" />
          <stop offset=".55" stopColor="#9c6644" />
          <stop offset="1" stopColor="#6b4430" />
        </linearGradient>
      </defs>

      <path className="oak-ground" d="M82 525 C186 519 245 524 300 525 C368 525 433 518 522 525" fill="none" stroke="#a7aa84" strokeWidth="2" />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {roots.map((root) => (
          <path key={root.d} className="oak-draw oak-root" d={root.d} pathLength="1" stroke="#6b4430" strokeWidth="9" style={{ '--draw-delay': root.delay }} />
        ))}
        {branches.map((branch, index) => (
          <path key={branch.d} className={`oak-draw ${index === 0 ? 'oak-trunk' : 'oak-branch'}`} d={branch.d} pathLength="1" stroke="url(#oak-bark)" strokeWidth={branch.width} style={{ '--draw-delay': branch.delay }} />
        ))}
        {twigs.map((twig) => (
          <path key={twig.d} className="oak-draw oak-twig" d={twig.d} pathLength="1" stroke="#79513a" strokeWidth={twig.width} style={{ '--draw-delay': twig.delay }} />
        ))}
        <path className="oak-draw oak-bark-mark" d="M306 466 C309 435 307 404 306 381" pathLength="1" stroke="#c38d5d" strokeWidth="3" style={{ '--draw-delay': '.7s' }} />
        <path className="oak-draw oak-bark-mark" d="M284 317 C262 288 234 267 209 259" pathLength="1" stroke="#c38d5d" strokeWidth="2" style={{ '--draw-delay': '1s' }} />
        <path className="oak-draw oak-bark-mark" d="M292 445 C289 429 290 414 291 402" pathLength="1" stroke="#583a2a" strokeWidth="2" style={{ '--draw-delay': '.78s' }} />
        <path className="oak-draw oak-bark-mark" d="M303 370 C305 350 302 334 300 322" pathLength="1" stroke="#5c3d2c" strokeWidth="2" style={{ '--draw-delay': '.85s' }} />
        <path className="oak-draw oak-bark-mark" d="M293 375 C291 363 291 352 292 344" pathLength="1" stroke="#bc8456" strokeWidth="1.7" style={{ '--draw-delay': '.9s' }} />
        <path className="oak-draw oak-bark-mark" d="M312 491 C322 500 333 503 344 505" pathLength="1" stroke="#b37a50" strokeWidth="1.5" style={{ '--draw-delay': '.7s' }} />
      </g>

      {crowns.map((crown, index) => (
        <g key={`${crown.x}-${crown.y}`} transform={`translate(${crown.x} ${crown.y}) rotate(${crown.rotation}) scale(${crown.scale})`}>
          <g className="oak-crown" style={{ '--crown-delay': crown.delay }}>
            <path
              d={crownShapes[index % crownShapes.length]}
              fill={crown.color}
              stroke="#294c35"
              strokeWidth="2"
            />
            <g className="oak-crown__leaves">{canopyLeaves(index)}</g>
          </g>
        </g>
      ))}
    </svg>
  );
}
